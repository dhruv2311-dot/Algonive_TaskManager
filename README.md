# 📝 TaskFlow - Professional Task Manager

A **premium**, fully-functional task management web application built with **HTML**, **CSS**, and **Vanilla JavaScript** only. Features an enterprise-grade UI with sidebar navigation, modal system, search functionality, and comprehensive task management capabilities.

![Task Manager](https://img.shields.io/badge/Built%20with-Vanilla%20JS-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Create tasks with title, description, due date/time, and priority
- ✏️ **Edit Tasks** - Modify existing tasks with ease
- 🗑️ **Delete Tasks** - Remove tasks with confirmation
- ☑️ **Mark Complete/Incomplete** - Toggle task completion status
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 🎯 **Priority Levels** - Set High, Medium, or Low priority with color tags
- 📤 **Export Tasks** - Download all tasks as JSON file
- 📥 **Import Tasks** - Upload and restore tasks from JSON file
- 💾 **LocalStorage Persistence** - All data saved automatically
- ⏰ **Smart Reminders** - Visual alerts for tasks due within 24 hours
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop

### UI/UX Highlights
- 🎨 **Enterprise-Grade Design** - Professional sidebar layout with Inter font
- 🎭 **Modal System** - Smooth modal animations for task creation/editing
- 🔍 **Real-time Search** - Instant task filtering by title or description
- 🎯 **Sidebar Navigation** - Organized navigation with task counters
- 🌈 **Color-Coded States** - Visual indicators for task status
- ⚡ **Smooth Animations** - Fade-in, slide-up, and hover transitions
- 🔔 **Due Soon Alerts** - Warning color and pulsing badge for urgent tasks
- 📊 **Live Counters** - Real-time task counts in sidebar and tabs
- 🖱️ **Interactive Cards** - Hover effects with left border accent
- ⌨️ **Keyboard Shortcuts** - Ctrl+K to create task, Esc to close modal

---

## 🚀 Quick Start

### Option 1: Direct Download
1. Download all files from this repository
2. Open `index.html` in your web browser
3. Start managing your tasks!

### Option 2: Clone Repository
```bash
git clone https://github.com/yourusername/Algonive_TaskManager.git
cd Algonive_TaskManager
```

Then open `index.html` in your browser.

### Option 3: Live Server (Recommended for Development)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html → "Open with Live Server"
```

---

## 📂 Project Structure

```
Algonive-Task Manager/
│
├── index.html          # Main HTML structure
├── style.css           # Professional styling & responsive design
├── script.js           # Vanilla JavaScript logic
└── README.md           # Documentation (this file)
```

---

## 💻 Usage Guide

### Adding a Task
1. Click **"New Task"** in sidebar, **"+"** button in top bar, or press **Ctrl+K**
2. Fill in the **Task Title** (required)
3. Optionally add a **Description**
4. Set a **Due Date & Time** (optional)
5. Click **"Create Task"** button

### Editing a Task
1. Click the **"Edit"** button on any task card
2. Modal will open with task details pre-filled
3. Modify the information
4. Click **"Update Task"** to save changes
5. Click **"Cancel"** or press **Esc** to discard changes

### Completing Tasks
- Click the **checkbox** next to the task title, OR
- Click the **"Complete"** button
- Completed tasks show with strikethrough text
- Click again to mark as incomplete

### Filtering Tasks
Use the sidebar navigation or top tabs:
- **All Tasks** - Shows all tasks
- **Active** - Shows only incomplete tasks
- **Completed** - Shows only completed tasks

### Searching Tasks
- Use the search box in the top bar
- Search by task title or description
- Works with current filter selection

### Setting Priority
- Choose from High, Medium, Low, or None
- Priority shown as colored badge on task card
- High = Red, Medium = Amber, Low = Blue

### Exporting Tasks
1. Click the **Export** button (download icon) in top bar
2. Tasks will download as JSON file
3. Filename includes current date

### Importing Tasks
1. Click the **Import** button (upload icon) in top bar
2. Select a JSON file from your computer
3. Confirm import - tasks will be added to existing ones
4. Invalid tasks are automatically filtered out

### Deleting Tasks
1. Click the **"Delete"** button on any task
2. Confirm deletion in the popup dialog
3. Task will be permanently removed

---

## 🎯 Key Features Explained

### 1. Smart Due Date Reminders
Tasks are automatically highlighted based on their due date:
- **Orange border** + **Pulsing badge** = Due within 24 hours
- **Time-based formatting**:
  - "Due in X minutes" (< 1 hour)
  - "Due in X hours" (< 24 hours)
  - "Due in X days" (< 7 days)
  - Full date/time display (> 7 days)
  - "Overdue" status for past dates

### 2. LocalStorage Persistence
- All tasks automatically saved to browser's localStorage
- Data persists across browser sessions
- No server or database required
- Instant save on every action

### 3. Responsive Design
Breakpoints optimized for:
- **Mobile** (< 480px) - Single column, full-width buttons
- **Tablet** (480px - 767px) - Optimized spacing
- **Desktop** (> 768px) - Two-column layout with sticky form

### 4. Professional UI Elements
- **Gradient background** - Purple to blue gradient
- **Glassmorphism** - Frosted glass effect on header/footer
- **Card-based layout** - Elevated cards with shadows
- **SVG icons** - Crisp, scalable vector graphics
- **Custom scrollbar** - Styled for consistency
- **Smooth animations** - Fade-in, hover, and transition effects

---

## 🧪 Testing Checklist

- [x] Add new task with all fields
- [x] Add task with only title (minimal input)
- [x] Edit existing task
- [x] Delete task with confirmation
- [x] Mark task as complete/incomplete
- [x] Filter by All/Active/Completed
- [x] Check localStorage persistence (refresh browser)
- [x] Test task due within 24 hours (orange border)
- [x] Test responsive design on mobile
- [x] Test responsive design on tablet
- [x] Test responsive design on desktop
- [x] Verify smooth animations
- [x] Test with 0 tasks (empty state)
- [x] Test with many tasks (scrolling)

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **Vanilla JavaScript (ES6+)** - No frameworks or libraries

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Key JavaScript Concepts Used
- DOM manipulation
- Event handling
- LocalStorage API
- Array methods (filter, map, forEach)
- Template literals
- Arrow functions
- Date manipulation
- Conditional rendering

### CSS Features
- CSS Custom Properties (variables)
- Flexbox & Grid layouts
- Media queries
- Transitions & animations
- Pseudo-elements
- Backdrop filter (glassmorphism)
- Custom scrollbar styling

---

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main blue color */
  --primary-dark: #1e40af;       /* Darker blue */
  --success-color: #10b981;      /* Green for completed */
  --warning-color: #f59e0b;      /* Yellow for warnings */
  --danger-color: #ef4444;       /* Red for delete */
  --urgent-color: #f97316;       /* Orange for urgent */
}
```

### Changing Background Gradient
Modify the body gradient in `style.css`:

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adjusting Spacing
Modify spacing variables:

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

---

## 🚀 Extra Credit Ideas

### Enhancements You Can Add
1. **Search Functionality** - Filter tasks by keyword
2. **Priority Levels** - High/Medium/Low with color tags
3. **Categories/Tags** - Organize tasks by category
4. **Sort Options** - By date, priority, alphabetically
5. **Export/Import** - Download/upload tasks as JSON
6. **Dark Mode** - Toggle between light and dark themes
7. **Drag & Drop** - Reorder tasks
8. **Browser Notifications** - Real-time alerts for due tasks
9. **Statistics Dashboard** - Charts showing task completion
10. **Recurring Tasks** - Daily, weekly, monthly repeats

---

## 📸 Screenshots

### Desktop View
- Clean two-column layout
- Sticky form on the left
- Task list on the right

### Mobile View
- Single column layout
- Full-width buttons
- Optimized spacing

### Features
- Empty state message
- Due soon highlighting
- Completed task styling
- Filter buttons

---

## 🐛 Known Limitations

1. **Browser Notifications** - Visual reminders only (no system notifications)
2. **Data Sync** - LocalStorage is per-browser (no cloud sync)
3. **Collaboration** - Single-user only (no sharing)
4. **Backup** - Manual export/import not included (can be added)

---

## 📝 License

This project is open source and available for educational purposes.

---

## 🤝 Contributing

Feel free to fork this project and submit pull requests for:
- Bug fixes
- New features
- UI improvements
- Documentation updates

---

## 👨‍💻 Author

Built with ❤️ for **Algonive**

### Connect with Me
- 🔗 LinkedIn: [Tag @Algonive in your post]
- 🐙 GitHub: [Your GitHub Profile]
- 📧 Email: [Your Email]

---

## 🎓 Learning Outcomes

By building this project, you've learned:
- ✅ DOM manipulation and event handling
- ✅ LocalStorage API for data persistence
- ✅ Responsive web design principles
- ✅ Modern CSS techniques (Flexbox, Grid, animations)
- ✅ JavaScript ES6+ features
- ✅ Form handling and validation
- ✅ State management in vanilla JavaScript
- ✅ Date and time manipulation
- ✅ User experience (UX) best practices
- ✅ Clean code organization

---

## 📚 Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)

### Inspiration
- [Todoist](https://todoist.com/)
- [Microsoft To Do](https://todo.microsoft.com/)
- [Google Tasks](https://tasks.google.com/)

---

## 🎉 Acknowledgments

Special thanks to:
- **Algonive** - For the project opportunity
- **MDN Web Docs** - For excellent documentation
- **CSS-Tricks** - For design inspiration

---

## 📞 Support

If you encounter any issues or have questions:
1. Check the documentation above
2. Review the code comments in `script.js`
3. Open an issue on GitHub
4. Contact the author

---

**⭐ If you found this project helpful, please give it a star on GitHub!**

---

*Last Updated: November 2024*
