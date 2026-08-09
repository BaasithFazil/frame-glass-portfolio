# Admin Portal Setup Guide

## 🚀 Firebase Setup

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Create a project**
3. Enter project name: `frame-glass-portfolio`
4. Accept the terms and click **Create project**
5. Wait for the project to be created

### Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication** (left sidebar)
2. Click **Get Started**
3. Select **Email/Password** as the sign-in method
4. Enable it and click **Save**

### Step 3: Create Firestore Database

1. In Firebase Console, go to **Firestore Database** (left sidebar)
2. Click **Create database**
3. Start in **Production mode**
4. Choose location closest to you (e.g., `asia-southeast1` for Sri Lanka)
5. Click **Create**

### Step 4: Update Firestore Security Rules

In Firestore Database → **Rules** tab, replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read products
    match /products/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

Click **Publish**.

### Step 5: Get Firebase Credentials

1. Click the **Settings icon** (gear) → **Project settings**
2. Scroll to **Your apps** section
3. Click on the web app (or create one if needed)
4. Copy the config values:
   - apiKey
   - authDomain
   - projectId
   - storageBucket
   - messagingSenderId
   - appId

### Step 6: Set Environment Variables

1. Create a `.env.local` file in your project root (next to `package.json`)
2. Add the Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 👤 Create Admin Account

### In Firebase Console:

1. Go to **Authentication** tab
2. Click **Add user** (top right)
3. Enter admin email: `admin@frameglass.com`
4. Set a strong password
5. Click **Add user**

You can create multiple admin accounts as needed.

## 📦 Migrate Existing Products to Firestore

### Manually via Firebase Console:

1. Go to **Firestore Database**
2. Click **+ Start collection**
3. Collection name: `products`
4. Click **Next**
5. Add product documents with this structure:

```json
{
  "title": "Minimal Wall Mirror",
  "category": "mirrors",
  "price": 14500,
  "status": "new",
  "image": "/images/products/mirrors/2.jpg"
}
```

### Using Admin Panel:

1. Start the development server: `npm run dev`
2. Go to `http://localhost:5173/admin/login`
3. Login with your admin account
4. Click **+ Add Product** and add products through the form

## 🔐 Access Admin Portal

### Login:

- URL: `http://localhost:5173/admin/login`
- Email: `admin@frameglass.com`
- Password: (the password you set)

### Admin Dashboard:

- **Add Product**: Create new products with title, price, status, category
- **Edit Product**: Click "Edit" to modify existing products
- **Delete Product**: Click "Delete" to remove products
- **Filter**: View products by category (Mirrors, Frames, Glass)

## 🔄 Real-time Updates

Once you add/edit/delete products in the admin panel:

1. Changes sync instantly to Firestore
2. Website automatically fetches updated data
3. All portfolio and product pages reflect changes in real-time
4. No page refresh needed!

## 📋 Product Fields

When adding a product, fill in:

- **Title** (required): e.g., "Streamline Tall Standing Mirror"
- **Category** (required): mirrors, frames, or glass
- **Price** (required): e.g., 19000
- **Status** (optional): new, sale, or out-of-stock
- **Image URL** (required): Path to product image, e.g., `/images/products/mirrors/1.jpg`

## 🖼️ Product Images

Place product images in:

```
public/
├── images/
│   └── products/
│       ├── mirrors/
│       ├── frames/
│       └── glass/
```

Then reference them in the admin form as `/images/products/category/filename.jpg`

## 🚀 Deploying to Production

When deploying (e.g., to Vercel):

1. Add environment variables in your hosting platform
2. Copy values from `.env.local` to platform's environment settings
3. Firebase will work seamlessly in production

## 🆘 Troubleshooting

**"Login failed" error:**

- Verify Firebase credentials in `.env.local`
- Check that Authentication is enabled in Firebase Console

**"Products not loading":**

- Verify Firestore database is created
- Check Firestore Security Rules allow reads
- Check browser console for errors (F12)

**"Can't add/edit products":**

- Verify you're logged in as admin
- Check Firebase credentials
- Verify Firestore Security Rules allow writes for authenticated users

**Images not showing:**

- Verify image path starts with `/images/`
- Check image file exists in `public/` folder
- Use absolute paths, not relative paths

## 📞 Support

For issues, check:

- Firebase Documentation: https://firebase.google.com/docs
- Console errors: Press F12, check Console tab
- Firestore rules syntax: https://firebase.google.com/docs/firestore/security/get-started
