# 🚀 Quick Start Guide

## Running the Application

### Method 1: Direct Open (Simplest)
1. Navigate to the project folder
2. Double-click `index.html`
3. The app will open in your default browser
4. Start using immediately!

### Method 2: Local Server (Recommended)

#### Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

#### Using Node.js
```bash
# Using npx (no installation needed)
npx http-server -p 8000

# Or install globally
npm install -g http-server
http-server -p 8000
```
Then open: `http://localhost:8000`

#### Using VS Code
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📝 Basic Usage

### Adding Your First Task
1. Enter a task title (e.g., "Complete project documentation")
2. Add description (optional)
3. Set due date/time (optional)
4. Click "Add Task"

### Managing Tasks
- **Complete:** Click checkbox or "Complete" button
- **Edit:** Click "Edit" button, modify, then "Update Task"
- **Delete:** Click "Delete" button, confirm deletion
- **Filter:** Use All/Active/Completed buttons

### Testing Reminders
1. Add a task with due date within next 24 hours
2. Notice the orange border and pulsing badge
3. Task will show "Due in X hours/minutes"

---

## 🎨 Customization Quick Tips

### Change Primary Color
In `style.css`, find:
```css
--primary-color: #2563eb;
```
Replace with your color (e.g., `#ff6b6b` for red)

### Change Background
In `style.css`, find:
```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```
Use a gradient generator: [cssgradient.io](https://cssgradient.io/)

---

## 🐛 Troubleshooting

### Tasks Not Saving?
- Check browser console (F12) for errors
- Ensure localStorage is enabled
- Try in incognito mode to test

### Styling Looks Wrong?
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure `style.css` is in same folder as `index.html`
- Check browser console for 404 errors

### JavaScript Not Working?
- Ensure `script.js` is in same folder as `index.html`
- Check browser console for errors
- Try different browser

---

## 📱 Mobile Testing

### Using Browser DevTools
1. Open app in Chrome/Firefox
2. Press F12 to open DevTools
3. Click device icon (Ctrl+Shift+M)
4. Select device (iPhone, iPad, etc.)
5. Test all features

### Using Real Device
1. Find your computer's IP address
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`
2. Start local server (see above)
3. On mobile, open: `http://YOUR_IP:8000`
4. Test all features

---

## ⚡ Pro Tips

1. **Keyboard Shortcuts**
   - Tab through form fields
   - Enter to submit form
   - Esc to cancel edit (can be added)

2. **Data Management**
   - Export: Open browser console, type: `localStorage.getItem('tasks')`
   - Import: `localStorage.setItem('tasks', 'YOUR_JSON_DATA')`
   - Clear: `localStorage.clear()`

3. **Testing Due Dates**
   - Set task due in 30 minutes to see countdown
   - Set task due tomorrow to see normal display
   - Set task in past to see "Overdue"

4. **Performance**
   - App handles 100+ tasks smoothly
   - LocalStorage limit: ~5-10MB (thousands of tasks)
   - Refresh every minute to update due times

---

## 🎯 Next Steps

1. **Test All Features** - Go through each function
2. **Customize Design** - Make it your own
3. **Add Extra Features** - See README for ideas
4. **Deploy Online** - Use GitHub Pages
5. **Share Your Work** - Post on LinkedIn

---

## 📚 Learn More

- **JavaScript:** [javascript.info](https://javascript.info/)
- **CSS:** [css-tricks.com](https://css-tricks.com/)
- **HTML:** [MDN Web Docs](https://developer.mozilla.org/)

---

**Happy Task Managing! 🎉**
