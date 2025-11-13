// ===================================
// PROFESSIONAL TASK MANAGER - TaskFlow
// Vanilla JavaScript
// ===================================

// DOM Elements
const taskModal = document.getElementById('taskModal');
const taskForm = document.getElementById('taskForm');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('desc');
const dueInput = document.getElementById('dueDate');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const modalTitle = document.getElementById('modalTitle');
const submitBtnText = document.getElementById('submitBtnText');
const closeModalBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const searchInput = document.getElementById('searchInput');

// Buttons
const newTaskBtn = document.getElementById('newTaskBtn');
const emptyStateBtn = document.getElementById('emptyStateBtn');
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');

// Navigation
const navItems = document.querySelectorAll('.nav-item[data-view]');
const tabButtons = document.querySelectorAll('.tab-btn');

// Counters
const allCount = document.getElementById('allCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');
const tabAllCount = document.getElementById('tabAllCount');
const tabActiveCount = document.getElementById('tabActiveCount');
const tabCompletedCount = document.getElementById('tabCompletedCount');

// State
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';
let editingIndex = null;
let searchQuery = '';

// ===================================
// Utility Functions
// ===================================

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function isDueSoon(dueDate) {
  if (!dueDate) return false;
  const now = new Date();
  const due = new Date(dueDate);
  const diffMs = due - now;
  const diffHours = diffMs / (1000 * 60 * 60);
  return diffHours > 0 && diffHours <= 24;
}

function formatDate(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = date - now;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffMs < 0) {
    return `Overdue - ${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
  
  if (diffHours < 24 && diffHours >= 0) {
    if (diffHours < 1) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      return `Due in ${diffMinutes} min${diffMinutes !== 1 ? 's' : ''}`;
    }
    return `Due in ${diffHours} hr${diffHours !== 1 ? 's' : ''}`;
  }
  
  if (diffDays < 7) {
    return `Due in ${diffDays} day${diffDays !== 1 ? 's' : ''}`;
  }
  
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function updateCounts() {
  const all = tasks.length;
  const active = tasks.filter(t => !t.completed).length;
  const completed = tasks.filter(t => t.completed).length;
  
  allCount.textContent = all;
  activeCount.textContent = active;
  completedCount.textContent = completed;
  tabAllCount.textContent = all;
  tabActiveCount.textContent = active;
  tabCompletedCount.textContent = completed;
}

function getFilteredTasks() {
  let filtered = tasks;
  
  // Apply status filter
  if (currentFilter === 'active') {
    filtered = filtered.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filtered = filtered.filter(t => t.completed);
  }
  
  // Apply search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(t => 
      t.title.toLowerCase().includes(query) || 
      (t.desc && t.desc.toLowerCase().includes(query))
    );
  }
  
  return filtered;
}

// ===================================
// Modal Functions
// ===================================

function openModal(mode = 'create', index = null) {
  editingIndex = index;
  
  if (mode === 'edit' && index !== null) {
    const task = tasks[index];
    titleInput.value = task.title;
    descInput.value = task.desc || '';
    dueInput.value = task.dueDate || '';
    priorityInput.value = task.priority || 'none';
    modalTitle.textContent = 'Edit Task';
    submitBtnText.textContent = 'Update Task';
  } else {
    taskForm.reset();
    priorityInput.value = 'none';
    modalTitle.textContent = 'Create New Task';
    submitBtnText.textContent = 'Create Task';
    editingIndex = null;
  }
  
  taskModal.classList.add('active');
  titleInput.focus();
}

function closeModal() {
  taskModal.classList.remove('active');
  taskForm.reset();
  editingIndex = null;
}

// ===================================
// Render Functions
// ===================================

function renderTasks() {
  const filtered = getFilteredTasks();
  
  taskList.innerHTML = '';
  
  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    taskList.style.display = 'none';
  } else {
    emptyState.classList.add('hidden');
    taskList.style.display = 'grid';
    
    filtered.forEach((task) => {
      const actualIndex = tasks.indexOf(task);
      const taskElement = createTaskCard(task, actualIndex);
      taskList.appendChild(taskElement);
    });
  }
  
  updateCounts();
}

function createTaskCard(task, index) {
  const li = document.createElement('li');
  li.className = 'task-card';
  
  if (task.completed) {
    li.classList.add('completed');
  }
  
  if (isDueSoon(task.dueDate) && !task.completed) {
    li.classList.add('due-soon');
  }
  
  const priorityBadge = task.priority && task.priority !== 'none' ? 
    `<span class="priority-badge priority-${task.priority}">${task.priority}</span>` : '';
  
  li.innerHTML = `
    <div class="task-header">
      <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="toggleComplete(${index})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="task-content">
        <h3 class="task-title">${escapeHtml(task.title)}</h3>
        ${task.desc ? `<p class="task-description">${escapeHtml(task.desc)}</p>` : ''}
        <div class="task-meta">
          ${priorityBadge}
          ${task.dueDate ? `
            <span class="task-due-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${formatDate(task.dueDate)}
            </span>
          ` : ''}
        </div>
      </div>
    </div>
    <div class="task-actions">
      <button class="task-btn btn-complete" onclick="toggleComplete(${index})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        ${task.completed ? 'Undo' : 'Complete'}
      </button>
      <button class="task-btn btn-edit" onclick="editTask(${index})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
        Edit
      </button>
      <button class="task-btn btn-delete" onclick="deleteTask(${index})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
        Delete
      </button>
    </div>
  `;
  
  return li;
}

// ===================================
// Task Operations
// ===================================

function handleFormSubmit(e) {
  e.preventDefault();
  
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  const dueDate = dueInput.value;
  const priority = priorityInput.value;
  
  if (!title) {
    alert('Please enter a task title');
    return;
  }
  
  if (editingIndex !== null) {
    tasks[editingIndex] = {
      ...tasks[editingIndex],
      title,
      desc,
      dueDate,
      priority
    };
  } else {
    const newTask = {
      id: Date.now(),
      title,
      desc,
      dueDate,
      priority,
      completed: false,
      createdAt: new Date().toISOString()
    };
    tasks.unshift(newTask);
  }
  
  saveTasks();
  renderTasks();
  closeModal();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function editTask(index) {
  openModal('edit', index);
}

function deleteTask(index) {
  const task = tasks[index];
  
  if (confirm(`Delete "${task.title}"?`)) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

function handleFilterChange(filter) {
  currentFilter = filter;
  
  // Update nav items
  navItems.forEach(item => {
    if (item.dataset.view === filter || (filter === 'all' && item.dataset.view === 'tasks')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  // Update tab buttons
  tabButtons.forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  renderTasks();
}

function handleSearch(e) {
  searchQuery = e.target.value;
  renderTasks();
}

// ===================================
// Export/Import Functions
// ===================================

function exportTasks() {
  if (tasks.length === 0) {
    alert('No tasks to export!');
    return;
  }
  
  const dataStr = JSON.stringify(tasks, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `taskflow-export-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  alert(`✅ Exported ${tasks.length} task(s) successfully!`);
}

function importTasks(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const importedTasks = JSON.parse(event.target.result);
      
      if (!Array.isArray(importedTasks)) {
        throw new Error('Invalid file format');
      }
      
      const validTasks = importedTasks.filter(task => 
        task && typeof task === 'object' && task.title
      );
      
      if (validTasks.length === 0) {
        alert('❌ No valid tasks found in file!');
        return;
      }
      
      const confirmMsg = `Import ${validTasks.length} task(s)?\n\nThis will add to your existing tasks.`;
      if (confirm(confirmMsg)) {
        tasks = [...validTasks, ...tasks];
        saveTasks();
        renderTasks();
        alert(`✅ Imported ${validTasks.length} task(s) successfully!`);
      }
    } catch (error) {
      alert('❌ Error importing tasks. Please check the file format.');
      console.error('Import error:', error);
    }
  };
  
  reader.readAsText(file);
  importFile.value = '';
}

// ===================================
// Event Listeners
// ===================================

// Form
taskForm.addEventListener('submit', handleFormSubmit);

// Modal controls
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Click outside modal to close
taskModal.addEventListener('click', (e) => {
  if (e.target === taskModal || e.target.classList.contains('modal-overlay')) {
    closeModal();
  }
});

// Open modal buttons
newTaskBtn.addEventListener('click', () => openModal('create'));
emptyStateBtn.addEventListener('click', () => openModal('create'));

// Export/Import
exportBtn.addEventListener('click', exportTasks);
importBtn.addEventListener('click', () => importFile.click());
importFile.addEventListener('change', importTasks);

// Navigation
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const view = item.dataset.view;
    if (view === 'tasks') {
      handleFilterChange('all');
    } else {
      handleFilterChange(view);
    }
  });
});

// Tab buttons
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    handleFilterChange(btn.dataset.filter);
  });
});

// Search
searchInput.addEventListener('input', handleSearch);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Escape to close modal
  if (e.key === 'Escape' && taskModal.classList.contains('active')) {
    closeModal();
  }
  
  // Ctrl/Cmd + K to open new task
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openModal('create');
  }
});

// Make functions globally accessible
window.toggleComplete = toggleComplete;
window.editTask = editTask;
window.deleteTask = deleteTask;

// ===================================
// Initialization
// ===================================

function init() {
  renderTasks();
  
  // Set initial active states
  navItems[0].classList.add('active');
  tabButtons[0].classList.add('active');
  
  // Check for due tasks every minute
  setInterval(() => {
    renderTasks();
  }, 60000);
  
  console.log('✅ TaskFlow initialized');
  console.log(`📊 Loaded ${tasks.length} task(s)`);
}

// Start the app
init();
