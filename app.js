// ===== Sample Mutual Fund Data =====
const fundsData = [
  {
    id: 1,
    name: "Alpha Growth Equity Fund",
    category: "equity",
    risk: "high",
    returns: 16.5,
    expense: 1.8,
    horizon: "5+ years",
    description: "Diversified equity fund investing in large and mid-cap stocks for long-term capital appreciation.",
    idealFor: "Aggressive investors seeking high growth potential",
    perception: [
      "Higher return potential with higher volatility",
      "Requires longer investment horizon",
      "Often influenced by bull market performance"
    ],
    minInvestment: 5000,
    aum: "₹1,250 Cr",
    rating: 4.5,
    categoryReturn: 15.2,
    benchmark: "NIFTY 500",
    fundManager: "Amit Sharma",
    inceptionDate: "2015-03-15",
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: 2,
    name: "Secure Income Debt Fund",
    category: "debt",
    risk: "low",
    returns: 7.2,
    expense: 0.9,
    horizon: "2-4 years",
    description: "Investment-grade debt fund focusing on high-quality bonds and money market instruments.",
    idealFor: "Conservative investors seeking regular income",
    perception: [
      "Viewed as safer than equity funds",
      "Preferred by risk-averse investors",
      "May have lower inflation-adjusted returns"
    ],
    minInvestment: 1000,
    aum: "₹800 Cr",
    rating: 4.2,
    categoryReturn: 7.8,
    benchmark: "CRISIL Short Term Bond",
    fundManager: "Priya Patel",
    inceptionDate: "2012-08-22",
    exitLoad: "Nil"
  },
  {
    id: 3,
    name: "Balanced Advantage Hybrid Fund",
    category: "hybrid",
    risk: "moderate",
    returns: 11.3,
    expense: 1.4,
    horizon: "3-5 years",
    description: "Dynamically managed hybrid fund balancing equity and debt based on market conditions.",
    idealFor: "Investors seeking balance between growth and stability",
    perception: [
      "Seen as middle ground between equity and debt",
      "Appeals to first-time investors",
      "Selection often influenced by advisor recommendations"
    ],
    minInvestment: 500,
    aum: "₹650 Cr",
    rating: 4.0,
    categoryReturn: 10.8,
    benchmark: "CRISIL Hybrid 50+50",
    fundManager: "Rajesh Kumar",
    inceptionDate: "2018-01-10",
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: 4,
    name: "Bluechip Leaders Equity Fund",
    category: "equity",
    risk: "moderate",
    returns: 13.9,
    expense: 1.6,
    horizon: "4-6 years",
    description: "Large-cap focused equity fund investing in financially strong bluechip companies.",
    idealFor: "Investors preferring established companies",
    perception: [
      "Perceived as safer within equity category",
      "Brand recognition influences selection",
      "Historical consistency is key factor"
    ],
    minInvestment: 5000,
    aum: "₹2,100 Cr",
    rating: 4.7,
    categoryReturn: 12.5,
    benchmark: "NIFTY 50",
    fundManager: "Sneha Reddy",
    inceptionDate: "2010-05-30",
    exitLoad: "Nil"
  },
  {
    id: 5,
    name: "Short-Term Bond Debt Fund",
    category: "debt",
    risk: "low",
    returns: 6.4,
    expense: 0.7,
    horizon: "1-3 years",
    description: "Short duration debt fund investing in high-quality short-term instruments.",
    idealFor: "Investors seeking better returns than savings accounts",
    perception: [
      "Alternative to fixed deposits",
      "Attractive for systematic transfer plans",
      "Interest rate movements impact perception"
    ],
    minInvestment: 500,
    aum: "₹450 Cr",
    rating: 4.1,
    categoryReturn: 6.1,
    benchmark: "CRISIL Ultra Short Term",
    fundManager: "Vikram Joshi",
    inceptionDate: "2019-11-05",
    exitLoad: "Nil"
  },
  {
    id: 6,
    name: "Dynamic Allocation Hybrid Fund",
    category: "hybrid",
    risk: "moderate",
    returns: 10.1,
    expense: 1.5,
    horizon: "3-5 years",
    description: "Hybrid fund actively managing allocation based on macroeconomic indicators.",
    idealFor: "Investors comfortable with dynamic shifts",
    perception: [
      "Perception depends on strategy communication",
      "Investors may not fully understand allocation",
      "Advisor explanation crucial for selection"
    ],
    minInvestment: 1000,
    aum: "₹320 Cr",
    rating: 3.8,
    categoryReturn: 9.7,
    benchmark: "CRISIL Hybrid 35+65",
    fundManager: "Ankit Mehta",
    inceptionDate: "2020-02-18",
    exitLoad: "0.5% if redeemed within 1 year"
  },
  {
    id: 2,
    name: "Secure Income Debt Fund",
    category: "debt",
    risk: "low",
    returns: 7.2,
    expense: 0.9,
    horizon: "2-4 years",
    description: "Investment-grade debt fund focusing on high-quality bonds and money market instruments.",
    idealFor: "Conservative investors seeking regular income",
    perception: [
      "Viewed as safer than equity funds",
      "Preferred by risk-averse investors",
      "May have lower inflation-adjusted returns"
    ],
    minInvestment: 1000,
    aum: "₹800 Cr",
    rating: 4.2,
    categoryReturn: 7.8,
    benchmark: "CRISIL Short Term Bond",
    fundManager: "Priya Patel",
    inceptionDate: "2012-08-22",
    exitLoad: "Nil"
  },
  {
    id: 3,
    name: "Balanced Advantage Hybrid Fund",
    category: "hybrid",
    risk: "moderate",
    returns: 11.3,
    expense: 1.4,
    horizon: "3-5 years",
    description: "Dynamically managed hybrid fund balancing equity and debt based on market conditions.",
    idealFor: "Investors seeking balance between growth and stability",
    perception: [
      "Seen as middle ground between equity and debt",
      "Appeals to first-time investors",
      "Selection often influenced by advisor recommendations"
    ],
    minInvestment: 500,
    aum: "₹650 Cr",
    rating: 4.0,
    categoryReturn: 10.8,
    benchmark: "CRISIL Hybrid 50+50",
    fundManager: "Rajesh Kumar",
    inceptionDate: "2018-01-10",
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: 4,
    name: "Bluechip Leaders Equity Fund",
    category: "equity",
    risk: "moderate",
    returns: 13.9,
    expense: 1.6,
    horizon: "4-6 years",
    description: "Large-cap focused equity fund investing in financially strong bluechip companies.",
    idealFor: "Investors preferring established companies",
    perception: [
      "Perceived as safer within equity category",
      "Brand recognition influences selection",
      "Historical consistency is key factor"
    ],
    minInvestment: 5000,
    aum: "₹2,100 Cr",
    rating: 4.7,
    categoryReturn: 12.5,
    benchmark: "NIFTY 50",
    fundManager: "Sneha Reddy",
    inceptionDate: "2010-05-30",
    exitLoad: "Nil"
  },
  {
    id: 5,
    name: "Short-Term Bond Debt Fund",
    category: "debt",
    risk: "low",
    returns: 6.4,
    expense: 0.7,
    horizon: "1-3 years",
    description: "Short duration debt fund investing in high-quality short-term instruments.",
    idealFor: "Investors seeking better returns than savings accounts",
    perception: [
      "Alternative to fixed deposits",
      "Attractive for systematic transfer plans",
      "Interest rate movements impact perception"
    ],
    minInvestment: 500,
    aum: "₹450 Cr",
    rating: 4.1,
    categoryReturn: 6.1,
    benchmark: "CRISIL Ultra Short Term",
    fundManager: "Vikram Joshi",
    inceptionDate: "2019-11-05",
    exitLoad: "Nil"
  },
  {
    id: 6,
    name: "Dynamic Allocation Hybrid Fund",
    category: "hybrid",
    risk: "moderate",
    returns: 10.1,
    expense: 1.5,
    horizon: "3-5 years",
    description: "Hybrid fund actively managing allocation based on macroeconomic indicators.",
    idealFor: "Investors comfortable with dynamic shifts",
    perception: [
      "Perception depends on strategy communication",
      "Investors may not fully understand allocation",
      "Advisor explanation crucial for selection"
    ],
    minInvestment: 1000,
    aum: "₹320 Cr",
    rating: 3.8,
    categoryReturn: 9.7,
    benchmark: "CRISIL Hybrid 35+65",
    fundManager: "Ankit Mehta",
    inceptionDate: "2020-02-18",
    exitLoad: "0.5% if redeemed within 1 year"
  }
];

// ===== State Management =====
let selectedFunds = [];
let currentRole = 'investor';

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  renderFundsTable(fundsData);
  setupEventListeners();
  renderAnalytics();
  renderReports();
  loadAdvisorNotes();
  smoothScrolling();
  initializeRoleBasedUI();
  setupInvestmentCalculator();
}

// ===== Event Listeners =====
function setupEventListeners() {
  // Role selector
  document.getElementById('roleSelect').addEventListener('change', handleRoleChange);
  
  // Filters
  document.getElementById('categoryFilter').addEventListener('change', filterFunds);
  document.getElementById('riskFilter').addEventListener('change', filterFunds);
  document.getElementById('searchFund').addEventListener('input', filterFunds);
  
  // Select all checkbox
  document.getElementById('selectAll').addEventListener('change', handleSelectAll);
  
  // Advisor notes
  document.getElementById('saveNotes').addEventListener('click', saveAdvisorNotes);
  
  // Analytics update form
  document.getElementById('updateForm').addEventListener('submit', handleUpdateFund);
  
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
}

// ===== Navigation =====
function handleNavClick(e) {
  e.preventDefault();
  const target = e.target.getAttribute('href');
  
  // Update active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  e.target.classList.add('active');
  
  // Smooth scroll
  if (target) {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  }
}

function smoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== Role Management =====
function handleRoleChange(e) {
  currentRole = e.target.value;
  document.body.setAttribute('data-role', currentRole);
  
  // Update UI based on role
  updateRoleUI(currentRole);
  
  // Role-specific navigation
  const rolePages = {
    investor: '#funds',
    advisor: '#education',
    analyst: '#analytics',
    admin: '#reports'
  };
  
  const targetSection = rolePages[currentRole];
  if (targetSection) {
    document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== Update UI based on Role =====
function updateRoleUI(role) {
  // Hide/show elements based on role
  const roleElements = document.querySelectorAll('[data-role-visibility]');
  roleElements.forEach(element => {
    const visibleRoles = element.getAttribute('data-role-visibility').split(',');
    if (visibleRoles.includes(role) || visibleRoles.includes('all')) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
  
  // Update navigation based on role
  updateNavigationForRole(role);
  
  // Update content based on role
  updateContentForRole(role);
}

// ===== Update Navigation based on Role =====
function updateNavigationForRole(role) {
  // Different roles might see different navigation options
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    let showLink = true;
    
    // Define which pages each role can access
    switch(role) {
      case 'investor':
        showLink = ['index.html', 'overview.html', 'funds.html', 'education.html'].includes(href);
        break;
      case 'advisor':
        showLink = ['index.html', 'overview.html', 'funds.html', 'education.html', 'analytics.html'].includes(href);
        break;
      case 'analyst':
        showLink = ['index.html', 'overview.html', 'funds.html', 'analytics.html', 'reports.html'].includes(href);
        break;
      case 'admin':
        showLink = true; // Admin can access all pages
        break;
    }
    
    if (showLink) {
      link.style.display = 'inline-flex';
    } else {
      link.style.display = 'none';
    }
  });
}

// ===== Update Content based on Role =====
function updateContentForRole(role) {
  // Update content based on the current role
  const roleSpecificElements = document.querySelectorAll('[data-role-content]');
  
  roleSpecificElements.forEach(element => {
    const contentForRole = element.getAttribute('data-role-content');
    if (contentForRole === role || contentForRole === 'all') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
  
  // Update section titles based on role
  const sectionTitle = document.querySelector('.section-title');
  if (sectionTitle) {
    switch(role) {
      case 'investor':
        sectionTitle.textContent = 'Investment Options for You';
        break;
      case 'advisor':
        sectionTitle.textContent = 'Advisor Resources';
        break;
      case 'analyst':
        sectionTitle.textContent = 'Analytics Dashboard';
        break;
      case 'admin':
        sectionTitle.textContent = 'Platform Administration';
        break;
    }
  }
}

// ===== Initialize Role-based UI =====
function initializeRoleBasedUI() {
  // Add role-based attributes to existing elements
  const roleSelect = document.getElementById('roleSelect');
  if (roleSelect) {
    currentRole = roleSelect.value;
    updateRoleUI(currentRole);
  }
}

// ===== Funds Table =====
function renderFundsTable(funds) {
  const tbody = document.getElementById('fundsTableBody');
  tbody.innerHTML = '';
  
  if (funds.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-light);">No funds match your search criteria</td></tr>`;
    return;
  }
  
  funds.forEach(fund => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="checkbox" class="fund-checkbox" data-id="${fund.id}"></td>
      <td><strong>${fund.name}</strong></td>
      <td><span class="type-badge ${fund.category}">${capitalize(fund.category)}</span></td>
      <td>${capitalize(fund.risk)}</td>
      <td><strong style="color: var(--success)">${fund.returns.toFixed(1)}%</strong></td>
      <td>${fund.expense.toFixed(2)}%</td>
      <td><button class="btn-view" onclick="viewFundDetails(${fund.id})">View</button></td>
    `;
    tbody.appendChild(row);
  });
  
  // Add checkbox listeners
  document.querySelectorAll('.fund-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', handleFundSelection);
  });
}

function filterFunds() {
  const category = document.getElementById('categoryFilter').value;
  const risk = document.getElementById('riskFilter').value;
  const search = document.getElementById('searchFund').value.toLowerCase();
  
  const filtered = fundsData.filter(fund => {
    const matchCategory = category === 'all' || fund.category === category;
    const matchRisk = risk === 'all' || fund.risk === risk;
    const matchSearch = fund.name.toLowerCase().includes(search);
    return matchCategory && matchRisk && matchSearch;
  });
  
  renderFundsTable(filtered);
}

// ===== Fund Details =====
function viewFundDetails(id) {
  const fund = fundsData.find(f => f.id === id);
  if (!fund) return;
  
  const detailsContent = document.getElementById('detailsContent');
  const placeholder = document.querySelector('.details-placeholder');
  
  placeholder.style.display = 'none';
  detailsContent.classList.remove('hidden');
  
  detailsContent.innerHTML = `
    <div class="fund-header">
      <h4 style="color: var(--primary); margin-bottom: 0.5rem;">${fund.name}</h4>
      <div class="fund-rating" style="display: flex; align-items: center; margin-bottom: 1rem;">
        <span class="rating-stars" style="color: var(--secondary); margin-right: 0.5rem;">
          ${'★'.repeat(Math.floor(fund.rating))}${'☆'.repeat(5 - Math.floor(fund.rating))}
        </span>
        <span style="color: var(--text-light); font-size: 0.9rem;">${fund.rating}/5.0</span>
      </div>
    </div>
    
    <p style="color: var(--text-light); margin-bottom: 1.5rem;">${fund.description}</p>
    
    <div class="fund-metrics" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <div class="metric-card" style="background: var(--light); padding: 1rem; border-radius: 10px;">
        <strong>Category:</strong> ${capitalize(fund.category)}<br>
        <strong>Risk Level:</strong> ${capitalize(fund.risk)}
      </div>
      <div class="metric-card" style="background: var(--light); padding: 1rem; border-radius: 10px;">
        <strong>3Y Returns:</strong> <span style="color: var(--success); font-weight: 700;">${fund.returns.toFixed(1)}%</span><br>
        <strong>Category Avg:</strong> ${fund.categoryReturn.toFixed(1)}%
      </div>
      <div class="metric-card" style="background: var(--light); padding: 1rem; border-radius: 10px;">
        <strong>Expense Ratio:</strong> ${fund.expense.toFixed(2)}%<br>
        <strong>Min Investment:</strong> ₹${fund.minInvestment.toLocaleString()}
      </div>
    </div>
    
    <div class="fund-details-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
      <div>
        <strong style="color: var(--dark); display: block; margin-bottom: 0.5rem;">Investment Horizon:</strong>
        <span style="color: var(--text-light);">${fund.horizon}</span>
      </div>
      <div>
        <strong style="color: var(--dark); display: block; margin-bottom: 0.5rem;">Fund Manager:</strong>
        <span style="color: var(--text-light);">${fund.fundManager}</span>
      </div>
      <div>
        <strong style="color: var(--dark); display: block; margin-bottom: 0.5rem;">AUM:</strong>
        <span style="color: var(--text-light);">${fund.aum}</span>
      </div>
      <div>
        <strong style="color: var(--dark); display: block; margin-bottom: 0.5rem;">Benchmark:</strong>
        <span style="color: var(--text-light);">${fund.benchmark}</span>
      </div>
      <div>
        <strong style="color: var(--dark); display: block; margin-bottom: 0.5rem;">Inception Date:</strong>
        <span style="color: var(--text-light);">${new Date(fund.inceptionDate).toLocaleDateString()}</span>
      </div>
      <div>
        <strong style="color: var(--dark); display: block; margin-bottom: 0.5rem;">Exit Load:</strong>
        <span style="color: var(--text-light);">${fund.exitLoad}</span>
      </div>
    </div>
    
    <div style="margin-bottom: 1rem;">
      <strong style="color: var(--dark);">Ideal For:</strong>
      <p style="color: var(--text-light); margin-top: 0.5rem;">${fund.idealFor}</p>
    </div>
    
    <div>
      <strong style="color: var(--dark);">Investment Perception:</strong>
      <ul style="margin-top: 0.5rem; padding-left: 1.5rem; color: var(--text);">
        ${fund.perception.map(point => `<li style="margin-bottom: 0.5rem;">${point}</li>`).join('')}
      </ul>
    </div>
  `;
}

// ===== Fund Selection & Comparison =====
function handleSelectAll(e) {
  const checkboxes = document.querySelectorAll('.fund-checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.checked = e.target.checked;
  });
  updateSelectedFunds();
}

function handleFundSelection() {
  updateSelectedFunds();
}

function updateSelectedFunds() {
  const checkboxes = document.querySelectorAll('.fund-checkbox:checked');
  selectedFunds = Array.from(checkboxes).map(cb => parseInt(cb.dataset.id));
  
  if (selectedFunds.length > 3) {
    alert('You can compare maximum 3 funds at a time');
    checkboxes[checkboxes.length - 1].checked = false;
    selectedFunds.pop();
  }
  
  renderComparison();
  renderDetailedComparison();
}

function renderComparison() {
  const grid = document.getElementById('comparisonGrid');
  
  if (selectedFunds.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-light); text-align: center; padding: 2rem;">No funds selected for comparison</p>';
    return;
  }
  
  grid.innerHTML = '';
  
  selectedFunds.forEach(id => {
    const fund = fundsData.find(f => f.id === id);
    if (!fund) return;
    
    const card = document.createElement('div');
    card.className = 'comparison-card';
    card.innerHTML = `
      <div class="comparison-header" style="margin-bottom: 1rem;">
        <h4 style="color: var(--primary); margin: 0 0 0.5rem 0;">${fund.name}</h4>
        <div style="display: flex; align-items: center;">
          <span class="rating-stars" style="color: var(--secondary); margin-right: 0.5rem;">
            \${'★'.repeat(Math.floor(fund.rating))}\${'☆'.repeat(5 - Math.floor(fund.rating))}
          </span>
          <span style="color: var(--text-light); font-size: 0.8rem;">${fund.rating}/5.0</span>
        </div>
      </div>
      
      <div class="comparison-metrics" style="margin-bottom: 0.75rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <strong>Category:</strong>
          <span class="type-badge ${fund.category}">${capitalize(fund.category)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <strong>Risk:</strong>
          <span>${capitalize(fund.risk)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <strong>3Y Returns:</strong>
          <span style="color: var(--success); font-weight: 700;">${fund.returns.toFixed(1)}%</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <strong>Category Avg:</strong>
          <span>${fund.categoryReturn.toFixed(1)}%</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <strong>Expense:</strong>
          <span>${fund.expense.toFixed(2)}%</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <strong>Min Inv.:</strong>
          <span>₹${fund.minInvestment.toLocaleString()}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <strong>AUM:</strong>
          <span>${fund.aum}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <strong>Horizon:</strong>
          <span>${fund.horizon}</span>
        </div>
      </div>
      
      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
        <small style="color: var(--text-light);">${fund.idealFor}</small>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== Detailed Comparison Table =====
function renderDetailedComparison() {
  const comparisonSection = document.querySelector('.comparison-section');
  
  if (selectedFunds.length < 2) {
    // Remove detailed comparison if less than 2 funds are selected
    const existingTable = comparisonSection.querySelector('.detailed-comparison');
    if (existingTable) {
      existingTable.remove();
    }
    return;
  }
  
  // Remove existing table if present
  const existingTable = comparisonSection.querySelector('.detailed-comparison');
  if (existingTable) {
    existingTable.remove();
  }
  
  // Create detailed comparison table
  const table = document.createElement('table');
  table.className = 'detailed-comparison';
  
  // Get selected fund data
  const selectedFundData = selectedFunds.map(id => fundsData.find(f => f.id === id));
  
  // Create table header
  let headerHTML = '<thead><tr><th>Metric</th>';
  selectedFundData.forEach(fund => {
    headerHTML += `<th class="fund-column">${fund.name}</th>`;
  });
  headerHTML += '</tr></thead>';
  table.innerHTML = headerHTML;
  
  // Create table body with various metrics
  const metrics = [
    { label: 'Category', key: 'category', format: capitalize },
    { label: 'Risk Level', key: 'risk', format: capitalize },
    { label: '3Y Returns (%)', key: 'returns', format: val => val.toFixed(2) + '%' },
    { label: 'Category Average (%)', key: 'categoryReturn', format: val => val.toFixed(2) + '%' },
    { label: 'Expense Ratio (%)', key: 'expense', format: val => val.toFixed(2) + '%' },
    { label: 'Minimum Investment', key: 'minInvestment', format: val => '₹' + val.toLocaleString() },
    { label: 'AUM', key: 'aum', format: val => val },
    { label: 'Fund Manager', key: 'fundManager', format: val => val },
    { label: 'Rating', key: 'rating', format: val => val + '/5.0' },
    { label: 'Exit Load', key: 'exitLoad', format: val => val }
  ];
  
  let bodyHTML = '<tbody>';
  metrics.forEach(metric => {
    bodyHTML += `<tr><td>${metric.label}</td>`;
    selectedFundData.forEach(fund => {
      let value = fund[metric.key];
      if (metric.format) {
        value = metric.format(value);
      }
      
      // Add class based on whether higher or lower is better
      let valueClass = 'metric-value';
      if (['returns', 'rating', 'categoryReturn'].includes(metric.key)) {
        valueClass += ' higher-is-better';
      } else if (['expense', 'exitLoad'].includes(metric.key)) {
        valueClass += ' lower-is-better';
      }
      
      bodyHTML += `<td class="${valueClass}">${value}</td>`;
    });
    bodyHTML += '</tr>';
  });
  bodyHTML += '</tbody>';
  
  table.innerHTML += bodyHTML;
  
  // Insert table after the existing comparison section content
  comparisonSection.appendChild(table);
}

// ===== Investment Calculator =====
function setupInvestmentCalculator() {
  // Create calculator section if it doesn't exist
  const fundsSection = document.querySelector('.funds-section');
  if (!fundsSection) return;
  
  // Check if calculator already exists
  if (document.querySelector('.investment-calculator')) return;
  
  const calcSection = document.createElement('div');
  calcSection.className = 'investment-calculator';
  calcSection.innerHTML = `
    <h3>💰 Investment Calculator</h3>
    <p>Estimate potential returns on your mutual fund investments</p>
    
    <div class="calc-input-group">
      <div class="calc-input">
        <label for="principalAmount">Initial Investment (₹)</label>
        <input type="number" id="principalAmount" class="filter-select" value="100000" min="0">
      </div>
      
      <div class="calc-input">
        <label for="monthlySIP">Monthly SIP Amount (₹)</label>
        <input type="number" id="monthlySIP" class="filter-select" value="10000" min="0">
      </div>
      
      <div class="calc-input">
        <label for="expectedReturn">Expected Annual Return (%)</label>
        <input type="number" id="expectedReturn" class="filter-select" value="12" min="0" max="30" step="0.1">
      </div>
      
      <div class="calc-input">
        <label for="investmentPeriod">Investment Period (Years)</label>
        <input type="number" id="investmentPeriod" class="filter-select" value="10" min="1" max="30">
      </div>
    </div>
    
    <button id="calculateReturns" class="btn-update">Calculate Returns</button>
    
    <div id="calculationResult" class="calc-result" style="display: none;">
      <h4>Projection Results</h4>
      <div class="calc-result-item">
        <span>Total Invested Amount:</span>
        <span id="investedAmount" class="result-highlight">₹0</span>
      </div>
      <div class="calc-result-item">
        <span>Estimated Returns:</span>
        <span id="estimatedReturns" class="result-highlight">₹0</span>
      </div>
      <div class="calc-result-item">
        <span>Total Value:</span>
        <span id="totalValue" class="result-highlight">₹0</span>
      </div>
    </div>
  `;
  
  fundsSection.appendChild(calcSection);
  
  // Add event listener
  document.getElementById('calculateReturns').addEventListener('click', calculateAndDisplayReturns);
}

function calculateAndDisplayReturns() {
  const principal = parseFloat(document.getElementById('principalAmount').value) || 0;
  const monthly = parseFloat(document.getElementById('monthlySIP').value) || 0;
  const rate = parseFloat(document.getElementById('expectedReturn').value) || 0;
  const years = parseFloat(document.getElementById('investmentPeriod').value) || 0;
  
  const result = calculateReturns(principal, monthly, rate, years);
  
  document.getElementById('investedAmount').textContent = '₹' + result.invested.toLocaleString(undefined, { maximumFractionDigits: 0 });
  document.getElementById('estimatedReturns').textContent = '₹' + result.returns.toLocaleString(undefined, { maximumFractionDigits: 0 });
  document.getElementById('totalValue').textContent = '₹' + result.total.toLocaleString(undefined, { maximumFractionDigits: 0 });
  
  document.getElementById('calculationResult').style.display = 'block';
}

// ===== Advisor Notes =====
function loadAdvisorNotes() {
  const saved = localStorage.getItem('advisorNotes');
  if (saved) {
    document.getElementById('advisorNotes').value = saved;
  }
}

function saveAdvisorNotes() {
  const notes = document.getElementById('advisorNotes').value;
  localStorage.setItem('advisorNotes', notes);
  
  // Show visual feedback
  const button = document.getElementById('saveNotes');
  const originalText = button.textContent;
  button.textContent = '✓ Saved!';
  button.style.background = 'var(--success)';
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = 'var(--primary)';
  }, 2000);
}

// ===== Form Validation =====
function validateForm(formElement) {
  const inputs = formElement.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = 'var(--danger)';
      isValid = false;
    } else {
      input.style.borderColor = 'var(--border)';
    }
  });
  
  return isValid;
}

// ===== Investment Calculator =====
function calculateReturns(principal, monthly, rate, years) {
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  
  // Calculate future value of SIP
  let futureValue = 0;
  if (monthlyRate > 0) {
    futureValue = monthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
  }
  
  // Add principal
  futureValue += principal * Math.pow(1 + monthlyRate, months);
  
  return {
    invested: principal + (monthly * months),
    returns: futureValue - (principal + (monthly * months)),
    total: futureValue
  };
}

// ===== Analytics =====
function renderAnalytics() {
  renderCategoryChart();
  renderRiskDistribution();
  populateUpdateForm();
}

function renderCategoryChart() {
  const ctx = document.getElementById('categoryChart');
  if (!ctx) return;
  
  // Calculate category averages
  const categories = {};
  fundsData.forEach(fund => {
    if (!categories[fund.category]) {
      categories[fund.category] = { total: 0, count: 0 };
    }
    categories[fund.category].total += fund.returns;
    categories[fund.category].count += 1;
  });
  
  const labels = Object.keys(categories).map(cat => capitalize(cat));
  const data = Object.keys(categories).map(cat => 
    (categories[cat].total / categories[cat].count).toFixed(1)
  );
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Average 3Y Returns (%)',
        data: data,
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)'
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)'
        ],
        borderWidth: 2,
        borderRadius: 10,
        datalabels: {
          anchor: 'end',
          align: 'top',
          formatter: function(value) {
            return value + '%';
          },
          font: {
            weight: 'bold',
            size: 12
          }
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          bodyFont: {
            size: 12
          },
          titleFont: {
            size: 14
          }
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 11
            }
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => value + '%',
            font: {
              size: 11
            }
          }
        }
      }
    }
  });
}

function renderRiskDistribution() {
  const riskCounts = { low: 0, moderate: 0, high: 0 };
  fundsData.forEach(fund => {
    riskCounts[fund.risk]++;
  });
  
  const total = fundsData.length;
  const container = document.getElementById('riskDistribution');
  
  container.innerHTML = '';
  
  Object.entries(riskCounts).forEach(([risk, count]) => {
    const percentage = ((count / total) * 100).toFixed(0);
    
    const item = document.createElement('div');
    item.className = 'risk-bar-item';
    item.innerHTML = `
      <div class="risk-bar-label">
        <span>${capitalize(risk)} Risk</span>
        <span>${count} funds (${percentage}%)</span>
      </div>
      <div class="risk-bar-progress">
        <div class="risk-bar-fill ${risk}" style="width: ${percentage}%">${percentage}%</div>
      </div>
    `;
    container.appendChild(item);
  });
}

function populateUpdateForm() {
  const select = document.getElementById('updateFundSelect');
  select.innerHTML = '<option value="">Select a fund</option>';
  
  fundsData.forEach(fund => {
    const option = document.createElement('option');
    option.value = fund.id;
    option.textContent = fund.name;
    select.appendChild(option);
  });
}

function handleUpdateFund(e) {
  e.preventDefault();
  
  const fundId = parseInt(document.getElementById('updateFundSelect').value);
  const newCAGR = parseFloat(document.getElementById('updateCAGR').value);
  
  if (!fundId || isNaN(newCAGR)) {
    alert('Please select a fund and enter a valid CAGR value');
    return;
  }
  
  const fund = fundsData.find(f => f.id === fundId);
  if (fund) {
    fund.returns = newCAGR;
    renderFundsTable(fundsData);
    renderAnalytics();
    alert(`Updated ${fund.name} with new 3Y CAGR: ${newCAGR}%`);
    document.getElementById('updateForm').reset();
  }
}

// ===== Reports =====
function renderReports() {
  // Total funds
  document.getElementById('totalFunds').textContent = fundsData.length;
  
  // Average risk
  const riskScores = { low: 1, moderate: 2, high: 3 };
  const avgRiskScore = fundsData.reduce((sum, fund) => sum + riskScores[fund.risk], 0) / fundsData.length;
  const riskLevel = avgRiskScore < 1.5 ? 'Low' : avgRiskScore < 2.5 ? 'Moderate' : 'High';
  document.getElementById('avgRisk').textContent = riskLevel;
  
  // Fund distribution
  renderFundDistribution();
}

function renderFundDistribution() {
  const categories = { equity: 0, debt: 0, hybrid: 0 };
  fundsData.forEach(fund => {
    categories[fund.category]++;
  });
  
  const total = fundsData.length;
  const container = document.getElementById('fundDistribution');
  
  container.innerHTML = '';
  
  Object.entries(categories).forEach(([category, count]) => {
    const percentage = ((count / total) * 100).toFixed(0);
    
    const item = document.createElement('div');
    item.className = 'distribution-bar-item';
    item.innerHTML = `
      <div class="distribution-label">
        <span>${capitalize(category)} Funds</span>
        <span>${count} funds (${percentage}%)</span>
      </div>
      <div class="distribution-progress">
        <div class="distribution-fill" style="width: ${percentage}%">${percentage}%</div>
      </div>
    `;
    container.appendChild(item);
  });
}

// ===== Utility Functions =====
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== Validation Functions =====
function validateFundsData() {
  console.log('Validating funds data...');
  
  // Check if fundsData exists and has the expected structure
  if (!fundsData || !Array.isArray(fundsData) || fundsData.length === 0) {
    console.error('Funds data is missing or invalid');
    return false;
  }
  
  // Check each fund has required properties
  const requiredProperties = ['id', 'name', 'category', 'risk', 'returns', 'expense', 'description', 'perception'];
  
  for (const fund of fundsData) {
    for (const prop of requiredProperties) {
      if (fund[prop] === undefined) {
        console.error(`Fund ${fund.id || 'unknown'} is missing property: ${prop}`);
        return false;
      }
    }
    
    // Validate data types
    if (typeof fund.id !== 'number') {
      console.error(`Fund id should be a number: ${fund.id}`);
      return false;
    }
    
    if (typeof fund.name !== 'string') {
      console.error(`Fund name should be a string: ${fund.name}`);
      return false;
    }
    
    if (typeof fund.returns !== 'number') {
      console.error(`Fund returns should be a number: ${fund.returns}`);
      return false;
    }
  }
  
  console.log(`✓ Validated ${fundsData.length} funds successfully`);
  return true;
}

function validateRoleBasedUI() {
  console.log('Validating role-based UI functionality...');
  
  const roleSelect = document.getElementById('roleSelect');
  if (!roleSelect) {
    console.error('Role selector not found');
    return false;
  }
  
  // Test each role
  const roles = ['investor', 'advisor', 'analyst', 'admin'];
  for (const role of roles) {
    roleSelect.value = role;
    handleRoleChange({target: roleSelect});
    console.log(`✓ Tested role: ${role}`);
  }
  
  return true;
}

function validateFundComparison() {
  console.log('Validating fund comparison functionality...');
  
  // Test with sample fund IDs
  selectedFunds = [1, 2, 3];
  renderComparison();
  renderDetailedComparison();
  
  console.log('✓ Fund comparison tested');
  return true;
}

function runValidationTests() {
  console.log('=== Starting Application Validation Tests ===');
  
  const tests = [
    {name: 'Funds Data Validation', fn: validateFundsData},
    {name: 'Role-Based UI Validation', fn: validateRoleBasedUI},
    {name: 'Fund Comparison Validation', fn: validateFundComparison}
  ];
  
  let passed = 0;
  let total = tests.length;
  
  for (const test of tests) {
    console.log(`\nRunning: ${test.name}`);
    try {
      if (test.fn()) {
        console.log(`✓ ${test.name} PASSED`);
        passed++;
      } else {
        console.log(`✗ ${test.name} FAILED`);
      }
    } catch (error) {
      console.error(`✗ ${test.name} ERROR:`, error);
    }
  }
  
  console.log(`\n=== Validation Summary: ${passed}/${total} tests passed ===`);
  
  if (passed === total) {
    console.log('🎉 All validation tests passed!');
  } else {
    console.log('⚠️  Some tests failed. Please check the console for details.');
  }
}

// Make viewFundDetails globally accessible
window.viewFundDetails = viewFundDetails;

// Run validation on page load
// Uncomment the line below to run validation automatically
// setTimeout(runValidationTests, 2000);
