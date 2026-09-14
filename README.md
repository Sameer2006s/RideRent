# RideRent - Car Rental Management System

A modern responsive no-backend car rental website built with HTML5, CSS3, and vanilla JavaScript. Booking is handled through a Google Form and responses can be stored in Google Sheets.

## Run locally

Open the project folder in VS Code and open `index.html` directly, or use Live Server. Internet access is required for the starter remote images, Google Fonts, and Font Awesome. The site is static and needs no build step.

## Add or change cars

Open `js/script.js` and edit the `cars` array. Each item contains `name`, `category`, `price`, `seats`, `fuel`, `transmission`, `available`, `image`, `features`, and `description`. Change `price` to update the daily INR price; change `available` to `false` to disable booking. Replace `image` with a remote URL or a local path such as `assets/images/scorpio.jpg`.

## Connect Google Form

1. Create a Google Form with Customer Name, Mobile Number, Email, Selected Car, Pickup Date, Return Date, Pickup Location, Drop Location, Driving License Number, Address, Number of Passengers, and Additional Requirements.
2. In `js/script.js`, replace `YOUR_GOOGLE_FORM_URL_HERE` with the public form URL.
3. Clicking Rent now opens the form in a new tab. Since Google Forms is external, this page cannot directly detect submission; the Google Form confirmation screen handles that part.

### Pre-fill the selected car

In Google Forms use the three-dot menu, choose **Get pre-filled link**, fill the Selected Car question, and generate the link. Copy the parameter name that looks like `entry.123456789` into `GOOGLE_FORM_ENTRY_IDS.selectedCar` in `js/script.js`:

```js
const GOOGLE_FORM_ENTRY_IDS = { selectedCar: "entry.123456789" };
```

The selected car will then be added to the form URL automatically. Other fields can be supported by adding their entry IDs with the same pattern.

## Connect responses to Google Sheets

Open the form's **Responses** tab, click the green Sheets icon, and choose **Create a new spreadsheet** or an existing spreadsheet. Each submitted booking will be added as a new row. This project intentionally does not create a fake backend or local booking database.

## Business details

Replace the dummy phone, email, WhatsApp, address, and social links in `index.html` before publishing.

## Deploy

Upload `index.html`, `css/`, `js/`, and `assets/` to GitHub Pages, Netlify, Vercel, or any static web host. On GitHub Pages, push the folder to a repository, then use **Settings > Pages**, select the main branch and root folder, and save. Update the Google Form URL before making the site public.
