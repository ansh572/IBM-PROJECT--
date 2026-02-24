const dishes = [
    { id: 1, name: "Masala Dosa", category: "Breakfast", price: 120, rating: 4.5, img: "https://tinyurl.com/h5kb8d9w" },
    { id: 2, name: "Aloo Paratha", category: "Breakfast", price: 50, rating: 4.7, img: "https://tinyurl.com/37ezkfuh" },
    { id: 3, name: "Chole Bhature", category: "Breakfast", price: 150, rating: 4.8, img: "https://tinyurl.com/4yum4fte" },
    { id: 4, name: "Poha", category: "Breakfast", price: 60, rating: 4.3, img: "https://tinyurl.com/358n7jyj" },
    { id: 5, name: "Idli Sambar", category: "Breakfast", price: 80, rating: 4.4, img: "https://tinyurl.com/zu34kyky" },
    { id: 6, name: "Fruit Pancakes", category: "Breakfast", price: 180, rating: 4.6, img: "https://tinyurl.com/y6u4cf3v" },
    { id: 7, name: "Vada Pav", category: "Breakfast", price: 40, rating: 4.9, img: "https://tinyurl.com/mrwm2mzv" },
    { id: 8, name: "Kulhad Chai", category: "Breakfast", price: 40, rating: 4.9, img: "https://tinyurl.com/5349njks" },
    { id: 11, name: "Hyderabadi Biryani", category: "Lunch", price: 170, rating: 4.7, img: "https://tinyurl.com/mt4zvkua" },
    { id: 12, name: "Butter Panner Masala", category: "Lunch", price: 380, rating: 4.9, img: "https://tinyurl.com/3bvbnbuz" },
    { id: 13, name: "Rajma Chawal", category: "Lunch", price: 180, rating: 4.6, img: "https://tinyurl.com/yzbjnzp3" },
    { id: 14, name: "Veg Delux Thali", category: "Lunch", price: 320, rating: 4.5, img: "https://tinyurl.com/yt8625rz" },
    { id: 15, name: "Soya Tikka Roll", category: "Lunch", price: 160, rating: 4.4, img: "https://tinyurl.com/mwz9e7rd" },
    { id: 22, name: "Samosa (2pcs)", category: "Snacks", price: 50, rating: 4.8, img: "https://tinyurl.com/4s4kxsct" },
    { id: 23, name: "Veg Momos", category: "Snacks", price: 120, rating: 4.7, img: "https://tinyurl.com/4ap6rywh" },
    { id: 24, name: "Maggi Masala", category: "Snacks", price: 70, rating: 4.9, img: "https://tinyurl.com/4cdnheza" },
    { id: 31, name: "Malai Chaap", category: "Barbeque", price: 180, rating: 4.9, img: "https://tinyurl.com/2p9s5kx3" },
    { id: 32, name: "Paneer Tikka", category: "Barbeque", price: 280, rating: 4.6, img: "https://tinyurl.com/86zf2eye" },
    { id: 33, name: "Seekh Veg Kebab", category: "Barbeque", price: 350, rating: 4.8, img: "https://tinyurl.com/mruryud3" },
    { id: 41, name: "Dal Makhani", category: "Dinner", price: 280, rating: 4.8, img: "https://tinyurl.com/2me3zn6z" },
    { id: 42, name: "Shahi Paneer", category: "Dinner", price: 310, rating: 4.7, img: "https://tinyurl.com/3yh2n8a6" },
    { id: 43, name: "Malai Kofta", category: "Dinner", price: 320, rating: 4.5, img: "https://tinyurl.com/yrmcmp9k" },
    { id: 44, name: "Indian Bread(1pcs)", category: "Dinner", price: 20, rating: 4.5, img: "https://tinyurl.com/3p3hmdyk" },
    { id: 45, name: "Vanilla Ice-Cream", category: "Desert", price: 20, rating: 4.5, img: "https://tinyurl.com/3sj2kz4a" },
    { id: 46, name: "Gullab Jamun(2pcs)", category: "Desert", price: 50, rating: 4.2, img: "https://tinyurl.com/8crjc8b2" },
    { id: 47, name: "Oreo Shake", category: "Drinks", price: 80, rating: 4.2, img: "https://tinyurl.com/2skvnyz3" },
    { id: 48, name: "Cold Drink(Any 1)", category: "Drinks", price: 50, rating: 4.9, img: "https://tinyurl.com/mrxyr35n" },
    { id: 49, name: "Water Bottle(1)", category: "Drinks", price: 20, rating: 4.9, img: "https://tinyurl.com/ajncduxp" },
    {id:  50, name: "Rasmalai(1Pcs)",category:"Desert",price: 60, rating:4.8 ,img:"https://tinyurl.com/v3wsxczn"},
    {id:  51, name: "Gajar Ka Halwa(Per Kg)", category: "Desert", price: 850, rating: 4.9, img: "https://tinyurl.com/ymx29kyu" },
    {id:  52, name: "Cheese Cake", category: "Desert", price: 110, rating: 4.9, img: "https://tinyurl.com/nh3mbyh8" },
    {id:  53, name: "Apple Pie", category: "Desert", price: 250, rating: 4.4, img: "https://tinyurl.com/jkhhfdyh" },
    {id:  54, name: "Rice", category: "Dinner", price: 100, rating: 4.5, img: "https://tinyurl.com/bdetmfnw" },
    {id:  55, name: "Mix Veg", category: "Dinner", price: 150, rating: 4.9, img: "https://tinyurl.com/ys926twz" },
    {id:  56, name: "Tawa Roti", category: "Lunch", price: 10, rating: 4.1, img: "https://tinyurl.com/5ctrh5zu" },
    {id:  57, name: "Cheese Pizza", category: "Snacks", price: 200, rating: 4.9, img: "https://tinyurl.com/2s48kber" },
    {id:  58, name: "Burger", category: "Snacks", price: 90, rating: 4.1, img: "https://tinyurl.com/d2aaxwxx" },
    {id:  59, name: "Spring Roll", category: "Snacks", price: 150, rating: 4.7, img: "https://tinyurl.com/599cj27b" },
    {id:  60, name: "Coffee", category: "Breakfast", price: 70, rating: 4.7, img: "https://tinyurl.com/43te3ajn" },


];

const popularIds = [1, 2, 3, 4, 5, 11,57,60,52,58,47,31,32,7,48];
let cart = JSON.parse(localStorage.getItem('foodCart')) || {};

// 1. Initial Render (Popular Items only)
function renderDishes(data, isInitial = false) {
    const grid = document.getElementById('dishGrid');
    if(!grid) return;

    let displayData = isInitial ? data.filter(item => popularIds.includes(item.id)) : data;

    grid.innerHTML = displayData.map(item => {
        const qty = cart[item.id] || 0;
        return `
        <div class="card">
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'">
            <div class="card-content">
                <span class="rating">${item.rating} ★</span>
                <h3>${item.name}</h3>
                <p style="color: gray; font-size: 13px;">${item.category}</p>
                <div class="price-row">
                    <span style="font-weight: 700;">₹${item.price}</span>
                    <div id="btn-container-${item.id}">
                        ${qty > 0 ? getQtyControls(item.id, qty) : `<button class="add-btn" onclick="updateQty(${item.id}, 1)">Add</button>`}
                    </div>
                </div>
            </div>
        </div>`
    }).join('');
    updateCartCount(); 
}

// 2. Button UI
function getQtyControls(id, qty) {
    return `
        <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${id}, -1)">-</button>
            <span class="qty-val">${qty}</span>
            <button class="qty-btn" onclick="updateQty(${id}, 1)">+</button>
        </div>`;
}


// 3. Cart Logic with Sign-up & Limit Check
function updateQty(id, change) {
    // --- SIGN UP CHECK ---
    const userData = localStorage.getItem('user');
    if (!userData) {
        alert("Please Do Sign Up 😊");
        openModal();
        return;
    }

    if (!cart[id]) cart[id] = 0;
    const newQty = cart[id] + change;

    // --- 10 ITEM LIMIT ---
    if (newQty > 10) {
        alert("MAXIMUM QUANTITY REACHED (Limit: 10)");
        return; 
    }

    if (newQty <= 0) {
        delete cart[id];
    } else {
        cart[id] = newQty;
    }

    localStorage.setItem('foodCart', JSON.stringify(cart));
    
    updateCartCount();
    if(document.getElementById('cartSidebar').classList.contains('active')) renderSidebarItems();

    // Main Grid Sync
    const container = document.getElementById(`btn-container-${id}`);
    if (container) {
        const currentQty = cart[id] || 0;
        container.innerHTML = currentQty > 0 
            ? getQtyControls(id, currentQty) 
            : `<button class="add-btn" onclick="updateQty(${id}, 1)">Add</button>`;
    }
}

// 4. Remove Item Function
function removeFromCart(id) {
    delete cart[id];
    localStorage.setItem('foodCart', JSON.stringify(cart));
    updateCartCount();
    renderSidebarItems();
    const container = document.getElementById(`btn-container-${id}`);
    if (container) {
        container.innerHTML = `<button class="add-btn" onclick="updateQty(${id}, 1)">Add</button>`;
    }
}

// 5. Sidebar Rendering with Remove Button
function renderSidebarItems() {
    const container = document.getElementById('sidebarItemContainer');
    const sidebarTotal = document.getElementById('sidebarTotal');
    let html = "";
    let total = 0;

    Object.entries(cart).forEach(([id, qty]) => {
        const item = dishes.find(d => d.id == id);
        if(item) {
            total += item.price * qty;
            html += `
            <div class="sidebar-item" style="padding: 10px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 10px;">
                <img src="${item.img}" style="width: 50px; height: 50px; border-radius: 5px; object-fit: cover;">
                <div style="flex-grow: 1;">
                    <h4 style="margin:0; font-size: 14px;">${item.name}</h4>
                    <span style="font-size: 12px; color: #666;">₹${item.price} x ${qty}</span>
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 5px;">
                    <div class="qty-controls" style="transform: scale(0.8)">
                        <button class="qty-btn" onclick="updateQty(${id}, -1)">-</button>
                        <span>${qty}</span>
                        <button class="qty-btn" onclick="updateQty(${id}, 1)">+</button>
                    </div>
                    <button onclick="removeFromCart(${id})" style="background:none; border:none; color:red; font-size:10px; cursor:pointer; text-decoration:underline;">Remove</button>
                </div>
            </div>`;
        }
    });

    container.innerHTML = html || `<p style="text-align:center; margin-top: 50px; color: gray;">Cart is empty!</p>`;
    sidebarTotal.innerText = `₹${total}`;
}

// 6. Order Placement with Empty Cart Check
function placeOrder() {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty! Please add some dishes first. 🛒");
        return;
    }

    alert("🎉 Order Placed Successfully!");
    cart = {};
    localStorage.removeItem('foodCart');
    location.reload(); 
}
function removeFromCart(id) {
    // Delete all items from cart 
    delete cart[id];

    // LocalStorage updation
    localStorage.setItem('foodCart', JSON.stringify(cart));

    //  sync all  (Navbar, Sidebar, Main Grid)
    updateCartCount();
    renderSidebarItems();

    // Main grid button will be Added
    const container = document.getElementById(`btn-container-${id}`);
    if (container) {
        container.innerHTML = `<button class="add-btn" onclick="updateQty(${id}, 1)">Add</button>`;
    }
}
function updateCartCount() {
    let totalItems = 0;
    let totalPrice = 0;
    for (const id in cart) {
        const item = dishes.find(d => d.id == id);
        if (item) {
            totalItems += cart[id];
            totalPrice += cart[id] * item.price;
        }
    }
    document.getElementById('cartCount').innerText = `${totalItems} | ₹${totalPrice}`;
}

// 4. Sidebar Toggle & Render
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('active');
    renderSidebarItems();
}

// click listener to open sidebar
document.querySelector('.cart-btn').addEventListener('click', toggleCart);

function renderSidebarItems() {
    const container = document.getElementById('sidebarItemContainer');
    const sidebarTotal = document.getElementById('sidebarTotal');
    let html = "";
    let total = 0;

    Object.entries(cart).forEach(([id, qty]) => {
        const item = dishes.find(d => d.id == id);
        if(item) {
            total += item.price * qty;
            html += `
            <div class="sidebar-item" style="padding: 10px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 10px;">
                <img src="${item.img}" style="width: 50px; height: 50px; border-radius: 5px; object-fit: cover;">
                <div style="flex-grow: 1;">
                    <h4 style="margin:0; font-size: 14px;">${item.name}</h4>
                    <span style="font-size: 12px; color: #666;">₹${item.price} x ${qty}</span>
                </div>
                <div class="qty-controls" style="transform: scale(0.8)">
                    <button class="qty-btn" onclick="updateQty(${id}, -1)">-</button>
                    <span>${qty}</span>
                    <button class="qty-btn" onclick="updateQty(${id}, 1)">+</button>
                </div>
            </div>`;
        }
    });

    container.innerHTML = html || `<p style="text-align:center; margin-top: 50px; color: gray;">Khali hai, kuch mangwa lo!</p>`;
    sidebarTotal.innerText = `₹${total}`;
}

// 5. Filters
function applyFilters() {
    const category = document.getElementById('categorySelect').value;
    const term = document.getElementById('searchInput').value.toLowerCase();
    
    if (category === 'All' && term === '') {
        renderDishes(dishes, true);
        document.getElementById('gridTitle').innerText = "Popular Dishes";
    } else {
        const filtered = dishes.filter(d => 
            (category === 'All' || d.category === category) && 
            d.name.toLowerCase().includes(term)
        );
        renderDishes(filtered, false);
        document.getElementById('gridTitle').innerText = category === 'All' ? "Results" : `${category}`;
    }
}

// Modal & User Logic (Same as yours)
function openModal() { document.getElementById('authModal').style.display = "block"; }
function closeModal() { document.getElementById('authModal').style.display = "none"; }
function handleAuth(event) {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    localStorage.setItem('user', JSON.stringify({ name }));
    closeModal();
    checkUser();
}
function checkUser() {
    const saved = JSON.parse(localStorage.getItem('user'));
    const btn = document.getElementById('authBtn');
    const welcome = document.getElementById('userWelcome');

    if (saved) {
        btn.innerText = "Logout";
        // old onclick remove and new direct function call
        btn.setAttribute('onclick', 'logoutUser()'); 
        welcome.innerText = `Hi, ${saved.name.split(' ')[0]}!`;
        welcome.style.display = "block";
    } else {
        btn.innerText = "Sign Up";
        btn.setAttribute('onclick', 'openModal()');
        welcome.style.display = "none";
    }
}
// Start
checkUser();
renderDishes(dishes, true);


function logoutUser() {
    console.log("Logging out..."); // Debugging 
    localStorage.removeItem('user'); // User data delete
  
    location.reload(); // Page refresh 
}

function placeOrder() {
    // Check if the cart is empty
    // Object.keys(cart).check length to check  cart object is empty or not 
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty! Please add some dishes before placing an order. 🛒");
        return; // Function yahi stop ho jayega
    }

    // If cart has items, proceed with order
    alert("🎉 Order Placed Successfully! Your food is being prepared.");

    // Clear the cart after successful order
    cart = {};
    localStorage.removeItem('foodCart');
    
    // Refresh UI
    updateCartCount();
    renderDishes(dishes, true); 
    toggleCart(); // To close the sidebar
    location.reload(); // Page reload for a clean state
}
function filterByCategory(catName, btnElement) {
    // 1. All buttons active class remove
    document.querySelectorAll('.hero-filter-btn').forEach(btn => btn.classList.remove('active'));
    // 2. Clicked button are made active 
    btnElement.classList.add('active');
    // 3. Dropdown select update 
    document.getElementById('categorySelect').value = catName;
    // 4. Filtering logic call 
    applyFilters();
}
function renderSidebarItems() {
    const container = document.getElementById('sidebarItemContainer');
    const sidebarTotal = document.getElementById('sidebarTotal');
    let html = ""; 
    let subtotal = 0;

    Object.entries(cart).forEach(([id, qty]) => {
        const item = dishes.find(d => d.id == id);
        if(item) {
            subtotal += item.price * qty;
            html += `
            <div class="sidebar-item" style="padding: 10px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 10px;">
                <img src="${item.img}" style="width: 40px; height: 40px; border-radius: 5px; object-fit: cover;">
                <div style="flex-grow: 1;">
                    <h4 style="margin:0; font-size: 13px;">${item.name}</h4>
                    <span style="font-size: 11px; color: #666;">₹${item.price}</span>
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 5px;">
                    <div class="qty-controls" style="transform: scale(0.7); margin-right: -10px;">
                        <button class="qty-btn" onclick="updateQty(${id}, -1)">-</button>
                        <span>${qty}</span>
                        <button class="qty-btn" onclick="updateQty(${id}, 1)">+</button>
                    </div>
                    <button onclick="removeFromCart(${id})" style="color:red; border:none; background:none; cursor:pointer; font-size:10px; text-decoration:underline; padding:0;">Remove</button>
                </div>
            </div>`;
        }
    });

    let gst = subtotal * 0.05; 
    let total = subtotal + gst;

    container.innerHTML = html || `<p style="text-align:center; margin-top:50px; color:gray;">Cart is empty!</p>`;
    
    sidebarTotal.innerHTML = `
        <div style="font-size:13px; padding:10px; background:#f9f9f9; border-radius:8px; margin-top:10px;">
            <div style="display:flex; justify-content:space-between;"><span>Subtotal:</span> <span>₹${subtotal}</span></div>
            <div style="display:flex; justify-content:space-between;"><span>GST (5%):</span> <span>₹${gst.toFixed(2)}</span></div>
            <hr style="border:0; border-top:1px dashed #ccc; margin:8px 0;">
            <div style="display:flex; justify-content:space-between; font-weight:bold; color:#ff4d4d; font-size:16px;">
                <span>Grand Total:</span> <span>₹${total.toFixed(2)}</span>
            </div>
        </div>`;
}