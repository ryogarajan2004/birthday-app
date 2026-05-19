

const DB = {
    init() {
        if (localStorage.getItem('sn_v3')) return;

        const CITIES = [
            { id: 'chennai', name: 'Chennai', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRN4PGuaOBZicYrfmnFjkRt7RJY9LggNH4bZFJkDXfNFv9pf2PnAN4B3uDIGoBceEGUgBT3_Op4pdVLOcca3tKiicE&s=19' },
            { id: 'mumbai', name: 'Mumbai', img: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHBS2yaDJX6OBL_TdkTGYUkCV9Sm_SM6llMD03GY8nGTjiYziLo3JRMhdZ--YxNmcuv85KLja8HWRP9TkKPhYXZZXKvtQXl3HcHDpHJkteV9-gGTAcFeYKepO6adA-QhNBTGwM5SpPuLQQ=w810-h468-n-k-no' },
            { id: 'delhi', name: 'Delhi', img: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEfd8mSnOlGtnMxTT6I62ojjPYUrq9Quna3tYci-f7RX14KUaSwJcf9240YxgZewnNYSWDaK3oqzyG1h_GS6jOhjkLvO1c2IjWORwQ5jgEdDlh-jAi8ojSjes8q-1enTgGXhlvh0w=w810-h468-n-k-no' },
            { id: 'bangalore', name: 'Bangalore', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQDFzfgHFz1D8cOHEmI6fQ_xmUKOMAqdC88H1i1qDfuA057cAdvCpoqfJYM0qC1Koz5WiS08_ljX7SUeCuXWBLA6nQ&s=19' },
            { id: 'goa', name: 'Goa', img: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGFxF67gnYN2qokqSs8ouqtc7K24YwcgwSxcQNfnj1WqB6IIMc5plglOLXPTrPXEhgo_yMt5_gkHE96JYmiiBjlvz8CJ5tLXTX9jn2-oY-O_tRd1W6ajZdYcVgq2X7r-llykKM=w810-h468-n-k-no' },
            { id: 'jaipur', name: 'Jaipur', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQaxCLVfZ0GsJ_-JQGQgtOmMvWkqZI3iiYjp6oe8SShGlcjPA0pGAIiJu_zYo-QM_ZeZYbvivzXeou5pgecI9JaT7Y&s=19' },
            { id: 'ooty', name: 'Ooty', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTL5QtQ0-EJKMvTVde_aSmROCPnj3LJ09rJPuQZvz0OeB3e7CvVGg5WvtCo5uCXPTYOZQcrEJnhyWkMNiewYKLL5bE&s=19' },
            { id: 'pondicherry', name: 'Pondicherry', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQNhqK_1O6TU7PspJc4yi8E2aMD8nC91Xf6txqYfpo8CsE8RkXYnFEiT9fSrSYhUOnpG9Ppul0A5fUhnuN4Ra-pMAc&s=19' },
            { id: 'kolkata', name: 'Kolkata', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQNhqK_1O6TU7PspJc4yi8E2aMD8nC91Xf6txqYfpo8CsE8RkXYnFEiT9fSrSYhUOnpG9Ppul0A5fUhnuN4Ra-pMAc&s=19' },
            { id: 'hyderabad', name: 'Hyderabad', img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQNhqK_1O6TU7PspJc4yi8E2aMD8nC91Xf6txqYfpo8CsE8RkXYnFEiT9fSrSYhUOnpG9Ppul0A5fUhnuN4Ra-pMAc&s=19' }
        ];

        const HOTEL_IMGS = [
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1546311554598106789/original/ba9e79e0-1e80-4f8c-aaf2-983e611cdcd5.jpeg?im_w=960',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMDMwMzA5NDQyOTU1MzY4Mw==/original/e94e1056-0e0f-45dd-9d03-d1303ce5785f.jpeg?im_w=960',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1638236983736584095/original/40efab64-01f3-448d-8d61-b8e8378a88c9.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1346340216441305927/original/60fa0177-92ce-47c1-9150-6452b9a71fb6.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1533813069520395923/original/70cabb03-a8c0-4010-8539-1369040ee1d5.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-604855093626546308/original/8bf35222-6018-4f7c-accb-569e338f0e4d.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1619554693290884726/original/dfb6536f-f0ed-40e4-99c7-9a52b9cbcc5f.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1680186156087257476/original/dc94322f-303a-4118-8e69-e149a1ea049f.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1626915807352584164/original/767508b1-6f43-461a-b9b0-8d52ea4a2be7.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-1105093762080824893/original/e23ba0aa-bf4f-4b62-a91c-fc9dcb6e28ed.jpeg?im_w=720'
        ];
        const ROOM_IMGS = [
            'https://a0.muscache.com/im/pictures/004b46cd-4492-427c-a9f2-73848f5f0862.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NzI1NDU1ODM3OTAwNTExNg%3D%3D/original/5e2c940d-34e9-4911-b88c-9a78bb22bd0e.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/97852220-e916-49bd-a790-3768d0c5e20c.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/97852220-e916-49bd-a790-3768d0c5e20c.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1425866692917587227/original/707831dd-880d-4b44-aa83-69edf2436f6b.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1425866692917587227/original/707831dd-880d-4b44-aa83-69edf2436f6b.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1379691658771783850/original/1cceb5fc-3290-411a-8755-1eb170cd2ad9.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-1379691658771783850/original/1cceb5fc-3290-411a-8755-1eb170cd2ad9.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-693112760919663041/original/34e1497c-f57e-42d7-81a1-605b3fdada23.jpeg?im_w=720'
        ];

        const HOTEL_NAMES = ['Grand', 'Royal', 'Majestic', 'Imperial', 'Regal', 'Heritage', 'Luxury', 'Premium', 'Elite', 'Prestige'];
        const ROOM_NAMES = ['Cozy Nest', 'The Hideaway', 'Urban Escape', 'Garden Retreat', 'Serene Stay', 'Home Haven', 'Wanderer\'s Inn', 'Cloud 9', 'The Nook', 'Bliss Rooms'];
        const HOTEL_SUFFIXES = ['Hotel', 'Resort', 'Suites', 'Palace', 'Towers'];
        const AMENITY_POOL = ['WiFi', 'AC', 'Pool', 'Gym', 'Restaurant', 'Parking', 'Spa', 'Bar', 'Breakfast', 'Room Service', 'Laundry', 'Concierge', 'Hot Water', 'Garden', 'Balcony', 'Sea View', 'City View', 'Fireplace'];

        const users = [
            { id: 'u1', name: 'Admin User', email: 'admin@staynest.com', password: 'admin123', role: 'admin' },
            { id: 'u2', name: 'Raj Patel', email: 'raj@host.com', password: 'host123', role: 'host' },
            { id: 'u3', name: 'Priya Sharma', email: 'priya@host.com', password: 'host456', role: 'host' },
            { id: 'u4', name: 'Arun Kumar', email: 'arun@guest.com', password: 'guest123', role: 'customer' },
            { id: 'u5', name: 'Divya Nair', email: 'divya@guest.com', password: 'guest456', role: 'customer' },
        ];

        const properties = [];
        let pi = 0;
        CITIES.forEach((city, ci) => {
            for (let h = 0; h < 5; h++) {
                const hostId = h < 3 ? 'u2' : 'u3';
                const rating = +(4.0 + Math.random()).toFixed(1);
                const amenCount = 6 + (h % 4);
                const amens = [...new Set([...['WiFi', 'AC', 'Parking'], ...AMENITY_POOL.slice(3, 3 + amenCount)])].slice(0, 8);
                properties.push({
                    id: `p${++pi}`, hostId,
                    name: `${HOTEL_NAMES[h]} ${city.name} ${HOTEL_SUFFIXES[h % 5]}`,
                    type: 'hotel', cityId: city.id, location: city.name,
                    address: `${10 + h * 7} ${['MG Road', 'Beach Road', 'Park Street', 'Station Road', 'Mall Road'][h]}, ${city.name}`,
                    description: `A premium ${HOTEL_NAMES[h].toLowerCase()} hotel in the heart of ${city.name}. Enjoy world-class amenities, stunning views, and impeccable service for an unforgettable stay.`,
                    amenities: amens,
                    images: [HOTEL_IMGS[(ci * 5 + h) % HOTEL_IMGS.length]],
                    pricePerNight: 2000 + (ci * 200) + (h * 400),
                    totalRooms: 8 + h * 2,
                    maxGuestsPerRoom: 2 + (h % 2),
                    status: 'approved', rating: Math.min(rating, 5.0), reviewCount: 20 + h * 15 + ci * 5
                });
            }
            for (let r = 0; r < 5; r++) {
                const hostId = r < 3 ? 'u2' : 'u3';
                const rating = +(4.1 + Math.random() * 0.8).toFixed(1);
                const amens = ['WiFi', 'AC', 'Hot Water', 'Breakfast'].concat(AMENITY_POOL.slice(10, 10 + r + 2)).slice(0, 6);
                properties.push({
                    id: `p${++pi}`, hostId,
                    name: `${ROOM_NAMES[r]} ${city.name}`,
                    type: 'room', cityId: city.id, location: city.name,
                    address: `${r * 3 + 1} ${['White Town', 'Old Quarter', 'Heritage Lane', 'Lake View', 'Fort Area'][r]}, ${city.name}`,
                    description: `A charming room stay in ${city.name}. Homely atmosphere, personal touch, and local experiences make this the perfect choice for travellers seeking authentic stays.`,
                    amenities: amens,
                    images: [ROOM_IMGS[(ci * 5 + r) % ROOM_IMGS.length]],
                    pricePerNight: 800 + (ci * 100) + (r * 200),
                    totalRooms: 2 + r,
                    maxGuestsPerRoom: 2,
                    status: 'approved', rating: Math.min(rating, 5.0), reviewCount: 10 + r * 8 + ci * 3
                });
            }
        });

        const today = new Date();
        const d = (daysAgo) => { const x = new Date(today); x.setDate(x.getDate() + daysAgo); return x.toISOString().split('T')[0]; };
        const bookings = [
            { id: 'b1', propertyId: 'p1', customerId: 'u4', checkIn: d(-10), checkOut: d(-7), rooms: 2, guests: 4, totalAmount: 30240, paymentMode: 'online', paymentStatus: 'paid', status: 'completed', bookedAt: d(-15) + 'T10:00:00Z', guestName: 'Arun Kumar', guestEmail: 'arun@guest.com', guestPhone: '9876543210' },
            { id: 'b2', propertyId: 'p6', customerId: 'u5', checkIn: d(-5), checkOut: d(-2), rooms: 1, guests: 2, totalAmount: 6048, paymentMode: 'online', paymentStatus: 'paid', status: 'completed', bookedAt: d(-8) + 'T09:00:00Z', guestName: 'Divya Nair', guestEmail: 'divya@guest.com', guestPhone: '9876540000' },
            { id: 'b3', propertyId: 'p1', customerId: 'u4', checkIn: d(2), checkOut: d(5), rooms: 1, guests: 2, totalAmount: 15120, paymentMode: 'pay_at_hotel', paymentStatus: 'pending', status: 'confirmed', bookedAt: d(-1) + 'T14:00:00Z', guestName: 'Arun Kumar', guestEmail: 'arun@guest.com', guestPhone: '9876543210' },
            { id: 'b4', propertyId: 'p11', customerId: 'u5', checkIn: d(5), checkOut: d(10), rooms: 2, guests: 3, totalAmount: 35840, paymentMode: 'online', paymentStatus: 'paid', status: 'confirmed', bookedAt: d(-2) + 'T11:00:00Z', guestName: 'Divya Nair', guestEmail: 'divya@guest.com', guestPhone: '9876540000' },
        ];

        localStorage.setItem('sn_users', JSON.stringify(users));
        localStorage.setItem('sn_cities', JSON.stringify(CITIES));
        localStorage.setItem('sn_properties', JSON.stringify(properties));
        localStorage.setItem('sn_bookings', JSON.stringify(bookings));
        localStorage.setItem('sn_v3', '1');
    },

    getCities() { return JSON.parse(localStorage.getItem('sn_cities') || '[]'); },
    getUsers() { return JSON.parse(localStorage.getItem('sn_users') || '[]'); },
    saveUsers(u) { localStorage.setItem('sn_users', JSON.stringify(u)); },
    getUserById(id) { return this.getUsers().find(u => u.id === id); },
    getUserByEmail(e) { return this.getUsers().find(u => u.email === e); },
    addUser(u) { const arr = this.getUsers(); arr.push(u); this.saveUsers(arr); },
    updateUser(upd) { this.saveUsers(this.getUsers().map(x => x.id === upd.id ? upd : x)); },

    getProperties() { return JSON.parse(localStorage.getItem('sn_properties') || '[]'); },
    saveProperties(p) { localStorage.setItem('sn_properties', JSON.stringify(p)); },
    getPropById(id) { return this.getProperties().find(p => p.id === id); },
    getPropsByHost(hid) { return this.getProperties().filter(p => p.hostId === hid); },
    getApproved() { return this.getProperties().filter(p => p.status === 'approved'); },
    addProp(p) { const arr = this.getProperties(); arr.push(p); this.saveProperties(arr); },
    updateProp(upd) { this.saveProperties(this.getProperties().map(x => x.id === upd.id ? upd : x)); },
    removeProp(id) { this.saveProperties(this.getProperties().filter(x => x.id !== id)); },

    getBookings() { return JSON.parse(localStorage.getItem('sn_bookings') || '[]'); },
    saveBookings(b) { localStorage.setItem('sn_bookings', JSON.stringify(b)); },
    getBookingById(id) { return this.getBookings().find(b => b.id === id); },
    getBookingsByProp(pid) { return this.getBookings().filter(b => b.propertyId === pid); },
    getBookingsByCust(cid) { return this.getBookings().filter(b => b.customerId === cid); },
    addBooking(b) { const arr = this.getBookings(); arr.push(b); this.saveBookings(arr); },
    updateBooking(upd) { this.saveBookings(this.getBookings().map(x => x.id === upd.id ? upd : x)); },

    getBookedRooms(pid, ci, co) { return this.getBookingsByProp(pid).filter(b => b.status !== 'cancelled' && !(co <= b.checkIn || ci >= b.checkOut)).reduce((s, b) => s + b.rooms, 0); },
    getAvailRooms(pid, ci, co) { const p = this.getPropById(pid); return p ? p.totalRooms - this.getBookedRooms(pid, ci, co) : 0; },

    setSession(u) { localStorage.setItem('sn_session', JSON.stringify(u)); },
    getSession() { return JSON.parse(localStorage.getItem('sn_session') || 'null'); },
    clearSession() { localStorage.removeItem('sn_session'); },

    genId(p) { return p + Date.now() + Math.random().toString(36).substr(2, 4); },
    fmt(n) { return '₹' + Number(n).toLocaleString('en-IN'); },
    fmtDate(d) { return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }); },
    nights(ci, co) { return Math.max((new Date(co) - new Date(ci)) / (86400000), 0); }
};

// ============================================================
// ROUTER
// ============================================================
let currentPage = 'home';
let currentPropId = null;
let currentPayMode = 'online';
let currentRooms = 1;
let lastBookingId = null;

function nav(page, param) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-' + page);
    if (!el) { nav('home'); return; }
    el.classList.add('active');
    currentPage = page;
    window.scrollTo(0, 0);
    renderNavbar();

    if (page === 'browse') initBrowse(param);
    if (page === 'property') initProperty(param || currentPropId);
    if (page === 'customer') initCustomer();
    if (page === 'host') initHost();
    if (page === 'admin') initAdmin();
    if (page === 'profile') initProfile();
    if (page === 'register' && param === 'host') setRegRole('host');
    if (page === 'login') { document.getElementById('li-email').value = ''; document.getElementById('li-pwd').value = ''; }
}

// ============================================================
// NAVBAR
// ============================================================
function renderNavbar() {
    const user = DB.getSession();
    const links = document.getElementById('nav-links');
    const right = document.getElementById('nav-right');

    links.innerHTML = `
    <span class="nav-link ${currentPage === 'home' ? 'active' : ''}" onclick="nav('home')">Home</span>
    <span class="nav-link ${currentPage === 'browse' ? 'active' : ''}" onclick="nav('browse')">Explore</span>
    ${user ? `<span class="nav-link ${['customer', 'host', 'admin'].includes(currentPage) ? 'active' : ''}" onclick="nav('${user.role === 'admin' ? 'admin' : user.role === 'host' ? 'host' : 'customer'}')">Dashboard</span>` : ''}
  `;

    if (!user) {
        right.innerHTML = `
      <button class="btn btn-outline btn-sm" onclick="nav('login')">Login</button>
      <button class="btn btn-primary btn-sm" onclick="nav('register')">Sign Up</button>
    `;
    } else {
        const ini = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
        right.innerHTML = `
      <div class="nav-avatar">
        ${ini}
        <div class="nav-dd">
          <div style="padding:.8rem 1rem;border-bottom:1px solid var(--border)">
            <div style="font-weight:600;font-size:.88rem">${user.name}</div>
            <div style="font-size:.75rem;color:var(--gray)">${user.role}</div>
          </div>
          <a onclick="nav('${user.role === 'admin' ? 'admin' : user.role === 'host' ? 'host' : 'customer'}')">⚙️ Dashboard</a>
          <a onclick="nav('profile')">👤 Profile</a>
          <hr>
          <a onclick="logout()">🚪 Logout</a>
        </div>
      </div>
    `;
    }
}

function logout() { DB.clearSession(); nav('home'); showToast('Logged out', 'info'); }

// ============================================================
// TOAST / MODAL
// ============================================================
function showToast(msg, type = 'success') {
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `${icons[type] || '💬'} ${msg}`;
    document.getElementById('toast-wrap').appendChild(t);
    setTimeout(() => t.remove(), 3500);
}
function openM(id) { document.getElementById(id).classList.add('open'); }
function closeM(id) { document.getElementById(id).classList.remove('open'); }
document.addEventListener('click', e => { if (e.target.classList.contains('modal-overlay')) e.target.classList.remove('open'); });

// ============================================================
// HELPERS
// ============================================================
function stars(r) {
    if (!r) return '<span class="muted" style="font-size:.78rem">No reviews</span>';
    return `<span style="color:#f59e0b">${'⭐'.repeat(Math.floor(r))}</span><span style="font-size:.83rem;font-weight:600"> ${r.toFixed(1)}</span>`;
}
function statusBadge(s) {
    const m = { confirmed: 'bg', completed: 'bb', cancelled: 'br', pending: 'bo' };
    return `<span class="badge ${m[s] || 'bgr'}">${s}</span>`;
}
function payBadge(mode, ps) {
    if (mode === 'online') return `<span class="badge bg">💳 Online${ps === 'paid' ? ' ✓' : ''}</span>`;
    return `<span class="badge bo">🏨 Pay at Hotel</span>`;
}
function getToday() { return new Date().toISOString().split('T')[0]; }
function getTomorrow() { const d = new Date(); d.setDate(d.getDate() + 1); return d.toISOString().split('T')[0]; }

function populateCityDropdown(selId, includeAll = true) {
    const sel = document.getElementById(selId);
    if (!sel) return;
    const cities = DB.getCities();
    sel.innerHTML = (includeAll ? '<option value="">🏙 All Cities</option>' : '') +
        cities.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
}

function propCard(p, onclick) {
    const avail = DB.getAvailRooms(p.id, getToday(), getTomorrow());
    const pct = (avail / p.totalRooms) * 100;
    return `
    <div class="prop-card" onclick="${onclick || `viewProp('${p.id}')`}">
      <div class="pc-img">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
        <span class="pc-type">${p.type === 'hotel' ? '🏨 Hotel' : '🛏 Room Stay'}</span>
        ${avail === 0 ? '<span style="position:absolute;bottom:10px;right:10px;background:rgba(220,38,38,.9);color:#fff;padding:.2rem .6rem;border-radius:50px;font-size:.72rem;font-weight:600">Fully Booked</span>' : ''}
      </div>
      <div class="pc-body">
        <div class="pc-title">${p.name}</div>
        <div class="pc-loc">📍 ${p.location}</div>
        <div style="margin:.5rem 0;font-size:.82rem;color:var(--gray);display:flex;gap:1rem">
          <span>🛏 ${p.totalRooms} rooms</span><span>👥 Max ${p.maxGuestsPerRoom}/room</span>
        </div>
        <div class="abar"><div class="afill ${pct < 30 ? 'low' : ''}" style="width:${pct}%"></div></div>
        <div class="txs muted mt1">${avail} of ${p.totalRooms} available today</div>
        <div class="pc-meta">
          <div class="pc-price">${DB.fmt(p.pricePerNight)} <span>/ night</span></div>
          <div class="pc-rating">${stars(p.rating)}</div>
        </div>
      </div>
    </div>`;
}

function viewProp(id) { currentPropId = id; nav('property', id); }

// ============================================================
// HOME PAGE
// ============================================================
function initHome() {
    // Dates
    document.getElementById('h-checkin').value = getToday();
    document.getElementById('h-checkout').value = getTomorrow();
    document.getElementById('h-checkin').min = getToday();

    // City dropdown
    populateCityDropdown('h-city');

    // City hero grid
    const cities = DB.getCities();
    document.getElementById('city-hero-grid').innerHTML = cities.map(c => {
        const count = DB.getApproved().filter(p => p.cityId === c.id).length;
        return `<div class="city-hero-card" onclick="nav('browse','city:${c.id}')">
      <img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='./images/image.png'">
      <div class="city-overlay">
        <div class="cname">${c.name}</div>
        <div class="ccount">${count} properties</div>
      </div>
    </div>`;
    }).join('');

    // Featured city tabs
    const tabsEl = document.getElementById('feat-city-tabs');
    tabsEl.innerHTML = cities.map((c, i) => `<button class="city-tab ${i === 0 ? 'active' : ''}" id="ftab-${c.id}" onclick="setFeatCity('${c.id}')">${c.name}</button>`).join('');

    window._featCity = cities[0].id;
    window._featType = 'all';
    renderFeatProps();
}

function setFeatCity(cid) {
    window._featCity = cid;
    document.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('ftab-' + cid)?.classList.add('active');
    renderFeatProps();
}

function setFeatType(type) {
    window._featType = type;
    ['all', 'hotel', 'room'].forEach(t => {
        const btn = document.getElementById('fbt-' + t);
        if (btn) { btn.className = t === type ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'; }
    });
    renderFeatProps();
}

function renderFeatProps() {
    let props = DB.getApproved().filter(p => p.cityId === window._featCity);
    if (window._featType !== 'all') props = props.filter(p => p.type === window._featType);
    const grid = document.getElementById('feat-props-grid');
    grid.innerHTML = props.length
        ? props.map(p => propCard(p)).join('')
        : `<div class="empty" style="grid-column:1/-1"><div class="eicon">🏚</div><h3>No properties found</h3></div>`;
}

function heroSearch() {
    const city = document.getElementById('h-city').value;
    const type = document.getElementById('h-type').value;
    const checkin = document.getElementById('h-checkin').value;
    const checkout = document.getElementById('h-checkout').value;
    const guests = document.getElementById('h-guests').value;

    if (checkin && checkout && checkout <= checkin) { showToast('Check-out must be after check-in', 'error'); return; }
    if (guests <= 0) { showToast('Guest must be greater than zero', 'error'); return; }

    window._browseInit = { city, type, checkin, checkout, guests };
    nav('browse');
}

// ============================================================
// BROWSE PAGE
// ============================================================
function initBrowse(param) {
    populateCityDropdown('b-city');

    const today = getToday(), tom = getTomorrow();
    document.getElementById('b-checkin').value = today;
    document.getElementById('b-checkout').value = tom;
    document.getElementById('b-checkin').min = today;

    // Handle params
    if (param && param.startsWith('city:')) {
        document.getElementById('b-city').value = param.replace('city:', '');
    } else if (param === 'hotel' || param === 'room') {
        document.getElementById('b-type').value = param;
    }

    if (window._browseInit) {
        const i = window._browseInit;
        if (i.city) document.getElementById('b-city').value = i.city;
        if (i.type) document.getElementById('b-type').value = i.type;
        if (i.checkin) document.getElementById('b-checkin').value = i.checkin;
        if (i.checkout) document.getElementById('b-checkout').value = i.checkout;
        if (i.guests) document.getElementById('b-guests').value = i.guests;
        window._browseInit = null;
    }

    // Amenity checkboxes
    const allAmen = [...new Set(DB.getApproved().flatMap(p => p.amenities))].sort();
    document.getElementById('amen-checks').innerHTML = allAmen.slice(0, 12).map(a =>
        `<label style="display:flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.85rem"><input type="checkbox" class="amen-cb" value="${a}"> ${a}</label>`
    ).join('');

    applyBrowse();
}

function applyBrowse() {
    let props = DB.getApproved();
    const city = document.getElementById('b-city')?.value;
    const type = document.getElementById('b-type')?.value;
    const ci = document.getElementById('b-checkin')?.value || getToday();
    const co = document.getElementById('b-checkout')?.value || getTomorrow();
    const guests = parseInt(document.getElementById('b-guests')?.value) || 0;
    const minP = parseFloat(document.getElementById('f-min')?.value) || 0;
    const maxP = parseFloat(document.getElementById('f-max')?.value) || Infinity;
    const minR = parseFloat(document.getElementById('f-rating')?.value) || 0;
    const selAmen = [...(document.querySelectorAll('.amen-cb:checked') || [])].map(c => c.value);
    const sort = document.getElementById('b-sort')?.value;

    if (co && ci && co <= ci) { showToast('Check-out must be after check-in', 'error'); return; }

    if (city) props = props.filter(p => p.cityId === city);
    if (type) props = props.filter(p => p.type === type);
    props = props.filter(p => p.pricePerNight >= minP && p.pricePerNight <= maxP);
    if (minR) props = props.filter(p => p.rating >= minR);
    if (selAmen.length) props = props.filter(p => selAmen.every(a => p.amenities.includes(a)));
    if (guests) props = props.filter(p => {
        const av = DB.getAvailRooms(p.id, ci, co);
        return av > 0 && (p.maxGuestsPerRoom * av) >= guests;
    });
    if (sort === 'price-asc') props.sort((a, b) => a.pricePerNight - b.pricePerNight);
    if (sort === 'price-desc') props.sort((a, b) => b.pricePerNight - a.pricePerNight);
    if (sort === 'rating') props.sort((a, b) => b.rating - a.rating);

    document.getElementById('browse-count').textContent = `${props.length} propert${props.length === 1 ? 'y' : 'ies'} found`;

    const grid = document.getElementById('browse-grid');
    if (!props.length) {
        grid.innerHTML = `<div class="empty" style="grid-column:1/-1"><div class="eicon">🏚</div><h3>No properties found</h3><p>Try adjusting your filters</p></div>`;
        return;
    }
    const ciE = encodeURIComponent(ci), coE = encodeURIComponent(co);
    grid.innerHTML = props.map(p => {
        const avail = DB.getAvailRooms(p.id, ci, co);
        const pct = (avail / p.totalRooms) * 100;
        return `<div class="prop-card" onclick="window._searchCtx={ci:'${ci}',co:'${co}',guests:${guests}};viewProp('${p.id}')">
      <div class="pc-img">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
        <span class="pc-type">${p.type === 'hotel' ? '🏨 Hotel' : '🛏 Room Stay'}</span>
        ${avail === 0 ? '<span style="position:absolute;bottom:10px;right:10px;background:rgba(220,38,38,.9);color:#fff;padding:.2rem .6rem;border-radius:50px;font-size:.72rem;font-weight:600">Fully Booked</span>' : ''}
      </div>
      <div class="pc-body">
        <div class="pc-title">${p.name}</div>
        <div class="pc-loc">📍 ${p.location}</div>
        <div style="margin:.5rem 0;font-size:.82rem;color:var(--gray);display:flex;gap:1rem">
          <span>🛏 ${p.totalRooms} rooms</span><span>👥 Max ${p.maxGuestsPerRoom}/room</span>
        </div>
        <div class="abar"><div class="afill ${pct < 30 ? 'low' : ''}" style="width:${pct}%"></div></div>
        <div class="txs muted mt1" style="font-weight:${avail === 0 ? '600' : '400'};color:${avail === 0 ? 'var(--coral)' : ''}">
          ${avail} of ${p.totalRooms} available
        </div>
        <div class="pc-meta">
          <div class="pc-price">${DB.fmt(p.pricePerNight)} <span>/night</span></div>
          <div class="pc-rating">${stars(p.rating)}</div>
        </div>
      </div>
    </div>`;
    }).join('');
}

function clearBrowse() {
    ['b-city', 'b-type', 'f-min', 'f-max'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    document.getElementById('f-rating').value = '0';
    document.querySelectorAll('.amen-cb').forEach(c => c.checked = false);
    applyBrowse();
}

// ============================================================
// PROPERTY DETAIL
// ============================================================
function initProperty(id) {
    const prop = DB.getPropById(id);
    if (!prop || prop.status !== 'approved') {
        document.getElementById('property-content').innerHTML = `<div class="empty" style="margin-top:4rem"><div class="eicon">❌</div><h3>Property not found</h3><button class="btn btn-primary mt2" onclick="nav('browse')">Back to Browse</button></div>`;
        return;
    }

    currentRooms = 1;
    currentPayMode = 'online';

    const ctx = window._searchCtx || {};
    const ci = ctx.ci || getToday();
    const co = ctx.co || getTomorrow();
    const gs = ctx.guests || 2;
    const host = DB.getUserById(prop.hostId);

    document.getElementById('property-content').innerHTML = `
    <div style="max-width:1100px;margin:2rem auto;padding:0 2rem">
      <!-- Gallery -->
      <div class="gallery">
        <img class="main" src="${prop.images[0]}" alt="${prop.name}" onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
        <img src="${prop.images[0]}" alt="${prop.name}" onerror="this.src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800'">
        <img src="${prop.images[0]}" alt="${prop.name}" onerror="this.src='https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800'">
      </div>
      <div style="display:grid;grid-template-columns:1fr 360px;gap:2rem" id="detail-inner">
        <!-- Left -->
        <div>
          <div class="between mb2">
            <div>
              <h1 style="font-family:var(--fh);font-size:1.8rem">${prop.name}</h1>
              <div style="color:var(--gray);margin:.3rem 0">📍 ${prop.address}</div>
              <div style="margin-top:.3rem">${stars(prop.rating)} <span class="muted txs">(${prop.reviewCount} reviews)</span></div>
            </div>
            <span class="badge ${prop.type === 'hotel' ? 'bb' : 'bg'}" style="font-size:.85rem;padding:.35rem .9rem">${prop.type === 'hotel' ? '🏨 Hotel' : '🛏 Room Stay'}</span>
          </div>
          <p style="color:var(--gray);line-height:1.75;margin-bottom:1.5rem">${prop.description}</p>
          <div style="margin-bottom:1.5rem">
            <h3 style="font-family:var(--fh);font-size:1rem;margin-bottom:.75rem">Amenities</h3>
            ${prop.amenities.map(a => `<span class="chip">✓ ${a}</span>`).join('')}
          </div>
          <div class="card" style="padding:1.2rem;margin-bottom:1.5rem">
            <h3 style="font-family:var(--fh);font-size:1rem;margin-bottom:.8rem">📊 Room Availability Today</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:.8rem">
              <div class="stat-card" style="padding:1rem"><div class="stat-icon si-teal">🛏</div><div><div class="stat-val">${prop.totalRooms}</div><div class="stat-label">Total Rooms</div></div></div>
              <div class="stat-card" style="padding:1rem" id="avail-stat-${id}"></div>
            </div>
            <div class="abar" id="abar-${id}"><div class="afill" id="afill-${id}" style="width:0%"></div></div>
            <div class="txs muted mt1" id="abar-txt-${id}"></div>
          </div>
          <div class="card" style="padding:1.2rem">
            <h3 style="font-family:var(--fh);font-size:1rem;margin-bottom:.6rem">🏠 Hosted by</h3>
            <div style="display:flex;align-items:center;gap:.8rem">
              <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--coral),var(--gold));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;flex-shrink:0">${host?.name.split(' ').map(n => n[0]).join('').toUpperCase()}</div>
              <div><div style="font-weight:600">${host?.name}</div><div class="muted tsm">${host?.email}</div></div>
            </div>
          </div>
        </div>
        <!-- Booking Card -->
        <aside>
          <div class="booking-card">
            <div class="between mb2">
              <div class="price-big">${DB.fmt(prop.pricePerNight)} <span>/night</span></div>
              <span id="avail-badge-${id}"></span>
            </div>
            <h3 style="font-family:var(--fh);font-size:1.1rem;margin-bottom:1rem">Book Your Stay</h3>
            <div class="fg mb2"><label>Check-in</label><input type="date" class="fc" id="bci-${id}" value="${ci}" min="${getToday()}" onchange="recalcProp('${id}')"></div>
            <div class="fg mb2"><label>Check-out</label><input type="date" class="fc" id="bco-${id}" value="${co}" min="${getTomorrow()}" onchange="recalcProp('${id}')"></div>
            <div class="fg mb2">
              <label>Rooms</label>
              <div class="room-ctr mt1">
                <button class="cnt-btn" onclick="chgRooms('${id}',-1)">−</button>
                <span class="cnt-val" id="room-cnt-${id}">1</span>
                <button class="cnt-btn" onclick="chgRooms('${id}',1)">+</button>
                <span class="muted tsm" id="avail-note-${id}"></span>
              </div>
            </div>
            <div class="fg mb2">
              <label>Guests</label>
              <input type="number" class="fc" id="bg-${id}" value="${gs}" min="1" onchange="recalcProp('${id}')">
              <div class="txs muted mt1" id="cap-note-${id}"></div>
            </div>
            <div id="pbd-${id}" style="background:var(--light);border-radius:var(--rsm);padding:1rem;margin:1rem 0">
              <div class="calc-row muted"><span>Select dates to see pricing</span></div>
            </div>
            <div class="fg mb2">
              <label>Payment Mode</label>
              <div class="pay-btns">
                <button class="pay-btn active" id="pay-online-${id}" onclick="setPayMode('${id}','online')">💳 Pay Online</button>
                ${prop.type === 'hotel' ? `<button class="pay-btn" id="pay-hotel-${id}" onclick="setPayMode('${id}','pay_at_hotel')">🏨 Pay at Hotel</button>` : ''}
              </div>
              ${prop.type === 'room' ? `<div class="txs muted">Room stays require online payment.</div>` : ''}
            </div>
            <button class="btn btn-primary w100 btn-lg" onclick="initiateBooking('${id}')">Book Now</button>
            <div class="txs muted text-center mt1">No charges until confirmation</div>
          </div>
        </aside>
      </div>
    </div>`;

    recalcProp(id);

    // Responsive fix
    if (window.innerWidth <= 900) {
        const di = document.getElementById('detail-inner');
        if (di) di.style.gridTemplateColumns = '1fr';
    }
}

function recalcProp(id) {
    const prop = DB.getPropById(id);
    if (!prop) return;
    const ci = document.getElementById(`bci-${id}`)?.value || getToday();
    const co = document.getElementById(`bco-${id}`)?.value || getTomorrow();
    const avail = DB.getAvailRooms(id, ci, co);
    const pct = (avail / prop.totalRooms) * 100;

    // Avail stat
    const as = document.getElementById(`avail-stat-${id}`);
    if (as) as.innerHTML = `<div class="stat-icon ${avail < prop.totalRooms * 0.3 ? 'si-coral' : 'si-teal'}">✅</div><div><div class="stat-val">${avail}</div><div class="stat-label">Available</div></div>`;

    const afill = document.getElementById(`afill-${id}`);
    if (afill) { afill.style.width = pct + '%'; afill.className = `afill ${pct < 30 ? 'low' : ''}`; }
    const atxt = document.getElementById(`abar-txt-${id}`);
    if (atxt) atxt.textContent = `${prop.totalRooms - avail} room(s) booked for selected dates`;

    const ab = document.getElementById(`avail-badge-${id}`);
    if (ab) ab.innerHTML = avail > 0 ? `<span class="badge bg">${avail} free</span>` : `<span class="badge br">Fully Booked</span>`;

    if (currentRooms > avail) currentRooms = Math.max(avail, 1);
    const rcnt = document.getElementById(`room-cnt-${id}`);
    if (rcnt) rcnt.textContent = currentRooms;

    const an = document.getElementById(`avail-note-${id}`);
    if (an) an.textContent = `(${avail} avail)`;

    const cap = currentRooms * prop.maxGuestsPerRoom;
    const cn = document.getElementById(`cap-note-${id}`);
    if (cn) cn.textContent = `Capacity: ${cap} guests for ${currentRooms} room(s)`;

    if (!ci || !co || co <= ci) {
        const pbd = document.getElementById(`pbd-${id}`);
        if (pbd) pbd.innerHTML = `<div class="calc-row muted"><span>Select valid dates</span></div>`;
        return;
    }
    const nights = DB.nights(ci, co);
    const base = currentRooms * nights * prop.pricePerNight;
    const tax = Math.round(base * 0.12);
    const total = base + tax;
    const pbd = document.getElementById(`pbd-${id}`);
    if (pbd) pbd.innerHTML = `
    <div class="calc-row"><span>${DB.fmt(prop.pricePerNight)} × ${currentRooms} room(s) × ${nights} night(s)</span><span>${DB.fmt(base)}</span></div>
    <div class="calc-row"><span>GST (12%)</span><span>${DB.fmt(tax)}</span></div>
    <div class="calc-total"><span>Total</span><span style="color:var(--coral)">${DB.fmt(total)}</span></div>`;
}

function chgRooms(id, delta) {
    const ci = document.getElementById(`bci-${id}`)?.value || getToday();
    const co = document.getElementById(`bco-${id}`)?.value || getTomorrow();
    const avail = DB.getAvailRooms(id, ci, co);
    currentRooms = Math.max(1, Math.min(currentRooms + delta, avail));
    recalcProp(id);
}

function setPayMode(id, mode) {
    currentPayMode = mode;
    document.getElementById(`pay-online-${id}`)?.classList.toggle('active', mode === 'online');
    document.getElementById(`pay-hotel-${id}`)?.classList.toggle('active', mode === 'pay_at_hotel');
}

function initiateBooking(id) {
    const user = DB.getSession();
    if (!user) { showToast('Please login to book', 'error'); setTimeout(() => nav('login'), 800); return; }
    if (user.role !== 'customer') { showToast('Only guests can book', 'error'); return; }

    const prop = DB.getPropById(id);
    const ci = document.getElementById(`bci-${id}`)?.value;
    const co = document.getElementById(`bco-${id}`)?.value;
    const gs = parseInt(document.getElementById(`bg-${id}`)?.value) || 2;

    if (!ci || !co || co <= ci) { showToast('Please select valid dates', 'error'); return; }
    const avail = DB.getAvailRooms(id, ci, co);
    if (avail < currentRooms) { showToast(`Only ${avail} room(s) available`, 'error'); return; }

    const nights = DB.nights(ci, co);
    const base = currentRooms * nights * prop.pricePerNight;
    const tax = Math.round(base * 0.12);
    const total = base + tax;

    window._bkCtx = { id, ci, co, gs, nights, total, base, tax };

    document.getElementById('bk-summary').innerHTML = `
    <div style="background:var(--light);border-radius:var(--rsm);padding:1rem;margin-bottom:1rem;font-size:.88rem">
      <div style="font-weight:600;font-size:1rem;margin-bottom:.5rem">${prop.name}</div>
      <div>📅 ${DB.fmtDate(ci)} → ${DB.fmtDate(co)} (${nights} nights)</div>
      <div>🛏 ${currentRooms} room(s) · 👥 ${gs} guests</div>
      <div>💰 Total: <strong style="color:var(--coral)">${DB.fmt(total)}</strong></div>
      <div>💳 ${currentPayMode === 'online' ? 'Online Payment' : 'Pay at Hotel'}</div>
    </div>`;

    document.getElementById('g-name').value = user.name || '';
    document.getElementById('g-email').value = user.email || '';
    document.getElementById('g-phone').value = user.phone || '';
    document.getElementById('card-form').classList.toggle('hidden', currentPayMode !== 'online');
    document.getElementById('confirm-bk-btn').textContent = currentPayMode === 'online' ? '💳 Pay & Confirm' : '✅ Confirm Booking';

    openM('modal-booking');
}

function confirmBooking() {
    const nm = document.getElementById('g-name').value.trim();
    const em = document.getElementById('g-email').value.trim();
    const ph = document.getElementById('g-phone').value.trim();
    if (!nm || !em || !ph) { showToast('Fill all guest details', 'error'); return; }

    if (currentPayMode === 'online') {
        const cnum = document.getElementById('c-num').value.replace(/\s/g, '');
        const cexp = document.getElementById('c-exp').value;
        const ccvv = document.getElementById('c-cvv').value;
        const cnm = document.getElementById('c-cname').value;
        if (!cnum || cnum.length < 16 || !cexp || !ccvv || !cnm) { showToast('Enter valid card details', 'error'); return; }
    }

    const user = DB.getSession();
    const ctx = window._bkCtx;
    const booking = {
        id: DB.genId('b'),
        propertyId: ctx.id, customerId: user.id,
        checkIn: ctx.ci, checkOut: ctx.co,
        rooms: currentRooms, guests: ctx.gs,
        totalAmount: ctx.total, paymentMode: currentPayMode,
        paymentStatus: currentPayMode === 'online' ? 'paid' : 'pending',
        status: 'confirmed', bookedAt: new Date().toISOString(),
        guestName: nm, guestEmail: em, guestPhone: ph
    };
    DB.addBooking(booking);
    lastBookingId = booking.id;

    const prop = DB.getPropById(ctx.id);
    closeM('modal-booking');

    document.getElementById('success-det').innerHTML = `
    <div>🏨 <strong>${prop.name}</strong></div>
    <div>📅 ${DB.fmtDate(ctx.ci)} – ${DB.fmtDate(ctx.co)}</div>
    <div>🛏 ${currentRooms} room(s) · 👥 ${ctx.gs} guests</div>
    <div>💰 ${DB.fmt(ctx.total)} · ${currentPayMode === 'online' ? '✅ Paid Online' : '🕐 Pay at Hotel'}</div>
    <div style="color:var(--gray);font-size:.8rem">Booking ID: ${booking.id}</div>`;

    document.getElementById('inv-btn').onclick = () => genInvoice(booking.id);
    openM('modal-success');
    recalcProp(ctx.id);
    showToast('Booking confirmed! 🎉');
}

function fmtCard(inp) { let v = inp.value.replace(/\D/g, '').substring(0, 16); inp.value = v.replace(/(.{4})/g, '$1 ').trim(); }

// ============================================================
// INVOICE
// ============================================================
function genInvoice(bid) {
    const b = DB.getBookingById(bid);
    const p = DB.getPropById(b.propertyId);
    const nights = DB.nights(b.checkIn, b.checkOut);
    const base = b.rooms * nights * p.pricePerNight;
    const tax = Math.round(base * 0.12);
    const total = base + tax;

    const w = window.open('', '_blank');
    w.document.write(`<!DOCTYPE html><html><head><title>Invoice ${b.id}</title>
  <style>body{font-family:sans-serif;color:#1A1A2E;padding:40px;max-width:700px;margin:auto}
  .logo{font-size:1.6rem;font-weight:700;color:#FF5A5F;margin-bottom:2rem}
  .logo span{color:#1A1A2E}table{width:100%;border-collapse:collapse;margin:1rem 0}
  th{background:#F7F6F3;padding:.6rem .8rem;text-align:left;font-size:.82rem}
  td{padding:.6rem .8rem;border-bottom:1px solid #E5E7EB;font-size:.88rem}
  .ttl{text-align:right;font-size:1.1rem;font-weight:700;color:#FF5A5F;margin-top:1rem}
  .footer{margin-top:3rem;padding-top:1rem;border-top:1px solid #E5E7EB;font-size:.78rem;color:#6B7280;text-align:center}
  h4{color:#6B7280;font-size:.8rem;text-transform:uppercase;letter-spacing:.08em;margin:1.5rem 0 .5rem}
  </style></head><body>
  <div class="logo">🏡 Stay<span>Nest</span></div>
  <div style="display:flex;justify-content:space-between;margin-bottom:2rem">
    <div><div style="font-size:1.2rem;font-weight:700">INVOICE</div>
    <div style="color:#6B7280;font-size:.85rem">#${b.id.toUpperCase()}</div>
    <div style="font-size:.82rem;margin-top:.3rem">Booked: ${DB.fmtDate(b.bookedAt)}</div></div>
    <div style="text-align:right"><span style="background:#d1fae5;color:#065f46;padding:.15rem .6rem;border-radius:50px;font-size:.72rem;font-weight:600">CONFIRMED</span>
    <div style="font-size:.82rem;margin-top:.3rem">${b.paymentMode === 'online' ? '💳 Online Payment' : '🏨 Pay at Hotel'}</div></div>
  </div>
  <h4>Property</h4><div style="font-weight:600">${p.name}</div><div style="font-size:.85rem;color:#6B7280">${p.address}</div>
  <h4>Guest</h4><div>${b.guestName} | ${b.guestEmail} | ${b.guestPhone}</div>
  <h4>Stay</h4>
  <table><tr><th>Check-in</th><th>Check-out</th><th>Rooms</th><th>Guests</th><th>Nights</th></tr>
  <tr><td>${DB.fmtDate(b.checkIn)}</td><td>${DB.fmtDate(b.checkOut)}</td><td>${b.rooms}</td><td>${b.guests}</td><td>${nights}</td></tr></table>
  <h4>Billing</h4>
  <table><tr><th>Description</th><th>Amount</th></tr>
  <tr><td>${p.name} × ${b.rooms} room(s) × ${nights} night(s)</td><td>₹${base.toLocaleString('en-IN')}</td></tr>
  <tr><td>GST (12%)</td><td>₹${tax.toLocaleString('en-IN')}</td></tr></table>
  <div class="ttl">Total: ₹${total.toLocaleString('en-IN')}</div>
  <div class="footer">Thank you for choosing StayNest! support@staynest.com | +91 98765 43210</div>
  </body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 600);
}

// ============================================================
// CUSTOMER DASHBOARD
// ============================================================
let custActiveTab = 'overview';

function initCustomer() {
    const user = DB.getSession();
    if (!user || user.role !== 'customer') { nav('login'); return; }
    custTab('overview', document.querySelector('#cust-sidebar .sb-link'));
}

function custTab(tab, el) {
    custActiveTab = tab;
    document.querySelectorAll('#cust-sidebar .sb-link').forEach(l => l.classList.remove('active'));
    if (el) el.classList.add('active');

    const user = DB.getSession();
    const all = DB.getBookingsByCust(user.id).sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt));
    const upcoming = all.filter(b => b.status === 'confirmed');
    const completed = all.filter(b => b.status === 'completed');
    const spent = all.filter(b => b.paymentStatus === 'paid').reduce((s, b) => s + b.totalAmount, 0);

    let html = '';
    if (tab === 'overview') {
        html = `
      <div class="between mb3">
        <div><h1 style="font-family:var(--fh);font-size:1.6rem">Welcome, ${user.name.split(' ')[0]}! 👋</h1><p class="muted">Your booking overview</p></div>
        <button class="btn btn-primary" onclick="nav('browse')">+ New Booking</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:1rem;margin-bottom:2rem">
        <div class="stat-card"><div class="stat-icon si-coral">📅</div><div><div class="stat-val">${all.length}</div><div class="stat-label">Total Bookings</div></div></div>
        <div class="stat-card"><div class="stat-icon si-teal">⏳</div><div><div class="stat-val">${upcoming.length}</div><div class="stat-label">Upcoming</div></div></div>
        <div class="stat-card"><div class="stat-icon si-blue">✅</div><div><div class="stat-val">${completed.length}</div><div class="stat-label">Completed</div></div></div>
        <div class="stat-card"><div class="stat-icon si-gold">💰</div><div><div class="stat-val">${DB.fmt(spent)}</div><div class="stat-label">Total Spent</div></div></div>
      </div>
      <h2 class="sec-title">Recent Bookings</h2>
      ${buildBkList(all.slice(0, 5))}`;
    } else {
        const filtered = tab === 'bookings' ? all : tab === 'upcoming' ? upcoming : completed;
        html = `<h2 class="sec-title">${tab === 'bookings' ? 'All Bookings' : tab === 'upcoming' ? 'Upcoming Stays' : 'Completed Stays'}</h2>${buildBkList(filtered)}`;
    }
    document.getElementById('cust-main').innerHTML = html;
}

function buildBkList(bks) {
    if (!bks.length) return `<div class="empty"><div class="eicon">📋</div><h3>No bookings here</h3><button class="btn btn-primary mt2" onclick="nav('browse')">Find Stays</button></div>`;
    return bks.map(b => {
        const p = DB.getPropById(b.propertyId);
        if (!p) return '';
        const nights = DB.nights(b.checkIn, b.checkOut);
        const canCancel = b.status === 'confirmed' && new Date(b.checkIn) > new Date();
        return `<div class="bk-item">
      <div class="bk-thumb"><img src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'"></div>
      <div>
        <div style="font-weight:600;font-family:var(--fh)">${p.name}</div>
        <div class="muted tsm">📍 ${p.location}</div>
        <div class="tsm mt1">📅 ${DB.fmtDate(b.checkIn)} – ${DB.fmtDate(b.checkOut)} <span class="muted">(${nights} nights)</span></div>
        <div class="tsm">🛏 ${b.rooms} room(s) · 👥 ${b.guests} guests</div>
        <div style="margin-top:.4rem;display:flex;gap:.4rem;flex-wrap:wrap">${statusBadge(b.status)} ${payBadge(b.paymentMode, b.paymentStatus)}</div>
      </div>
      <div class="bk-actions">
        <div style="font-weight:700;color:var(--coral)">${DB.fmt(b.totalAmount)}</div>
        ${b.paymentMode === 'online' && b.paymentStatus === 'paid' ? `<button class="btn btn-outline btn-sm" onclick="genInvoice('${b.id}')">📄 Invoice</button>` : ''}
        <button class="btn btn-ghost btn-sm" onclick="viewProp('${p.id}')">View</button>
        ${canCancel ? `<button class="btn btn-danger btn-sm" onclick="custCancelBk('${b.id}')">Cancel</button>` : ''}
      </div>
    </div>`;
    }).join('');
}

function custCancelBk(id) {
    if (!confirm('Cancel this booking?')) return;
    const b = DB.getBookingById(id); b.status = 'cancelled'; DB.updateBooking(b);
    showToast('Booking cancelled', 'info');
    custTab(custActiveTab, null);
}

// ============================================================
// HOST DASHBOARD
// ============================================================
let hostActiveTab = 'overview';

function initHost() {
    const user = DB.getSession();
    if (!user || user.role !== 'host') { nav('login'); return; }
    populateCityDropdown('ep-city', false);
    hostTab('overview', document.querySelector('#host-sidebar .sb-link'));
}

function hostTab(tab, el) {
    hostActiveTab = tab;
    document.querySelectorAll('#host-sidebar .sb-link').forEach(l => l.classList.remove('active'));
    if (el) el.classList.add('active');

    const user = DB.getSession();
    const props = DB.getPropsByHost(user.id);
    const pids = props.map(p => p.id);
    const allBks = DB.getBookings().filter(b => pids.includes(b.propertyId)).sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt));
    const rev = allBks.filter(b => b.paymentStatus === 'paid').reduce((s, b) => s + b.totalAmount, 0);

    let html = '';
    if (tab === 'overview') {
        html = `
      <div class="between mb3">
        <div><h1 style="font-family:var(--fh);font-size:1.6rem">Welcome, ${user.name.split(' ')[0]}! 👋</h1><p class="muted">Your host dashboard</p></div>
        <button class="btn btn-primary" onclick="openAddProp()">+ Add Property</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:1rem;margin-bottom:2rem">
        <div class="stat-card"><div class="stat-icon si-coral">🏨</div><div><div class="stat-val">${props.length}</div><div class="stat-label">Properties</div></div></div>
        <div class="stat-card"><div class="stat-icon si-teal">✅</div><div><div class="stat-val">${props.filter(p => p.status === 'approved').length}</div><div class="stat-label">Approved</div></div></div>
        <div class="stat-card"><div class="stat-icon si-gold">⏳</div><div><div class="stat-val">${props.filter(p => p.status === 'pending').length}</div><div class="stat-label">Pending</div></div></div>
        <div class="stat-card"><div class="stat-icon si-blue">💰</div><div><div class="stat-val">${DB.fmt(rev)}</div><div class="stat-label">Revenue</div></div></div>
      </div>
      <h2 class="sec-title">Recent Bookings</h2>
      <div class="tbl-wrap"><table><thead><tr><th>Booking</th><th>Property</th><th>Guest</th><th>Dates</th><th>Rooms</th><th>Amount</th><th>Payment</th><th>Status</th></tr></thead>
      <tbody>${allBks.slice(0, 8).map(b => {
            const p = DB.getPropById(b.propertyId);
            return `<tr>
          <td><code style="font-size:.75rem">${b.id}</code></td>
          <td>${p?.name || '—'}</td><td>${b.guestName}<br><span class="muted txs">${b.guestEmail}</span></td>
          <td>${DB.fmtDate(b.checkIn)}–${DB.fmtDate(b.checkOut)}</td>
          <td style="text-align:center">${b.rooms}</td>
          <td style="font-weight:600;color:var(--coral)">${DB.fmt(b.totalAmount)}</td>
          <td>${payBadge(b.paymentMode, b.paymentStatus)}</td>
          <td>${statusBadge(b.status)}</td></tr>`;
        }).join('') || '<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--gray)">No bookings yet</td></tr>'}
      </tbody></table></div>`;
    } else if (tab === 'properties') {
        html = `<div class="between mb3"><h2 class="sec-title" style="margin:0">My Properties</h2><button class="btn btn-primary" onclick="openAddProp()">+ Add Property</button></div>${buildHostPropList(props)}`;
    } else if (tab === 'bookings') {
        html = `<h2 class="sec-title">All Bookings</h2>
      <div style="margin-bottom:1rem;display:flex;gap:.5rem;flex-wrap:wrap">
        <button class="btn btn-outline btn-sm" onclick="hostBkFilter('all',this)" style="background:var(--coral);color:#fff;border-color:var(--coral)">All</button>
        <button class="btn btn-outline btn-sm" onclick="hostBkFilter('confirmed',this)">Confirmed</button>
        <button class="btn btn-outline btn-sm" onclick="hostBkFilter('completed',this)">Completed</button>
        <button class="btn btn-outline btn-sm" onclick="hostBkFilter('cancelled',this)">Cancelled</button>
      </div>
      <div class="tbl-wrap" id="host-bk-table">${buildHostBkTable(allBks)}</div>`;
    } else if (tab === 'revenue') {
        const online = allBks.filter(b => b.paymentMode === 'online' && b.paymentStatus === 'paid').reduce((s, b) => s + b.totalAmount, 0);
        html = `<h2 class="sec-title">Revenue & Payments</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:1rem;margin-bottom:2rem">
        <div class="stat-card"><div class="stat-icon si-coral">💰</div><div><div class="stat-val">${DB.fmt(rev)}</div><div class="stat-label">Total Revenue</div></div></div>
        <div class="stat-card"><div class="stat-icon si-teal">📅</div><div><div class="stat-val">${allBks.length}</div><div class="stat-label">Total Bookings</div></div></div>
        <div class="stat-card"><div class="stat-icon si-gold">💳</div><div><div class="stat-val">${DB.fmt(online)}</div><div class="stat-label">Online Received</div></div></div>
        <div class="stat-card"><div class="stat-icon si-blue">🏨</div><div><div class="stat-val">${allBks.filter(b => b.paymentMode === 'pay_at_hotel').length}</div><div class="stat-label">Pay at Hotel</div></div></div>
      </div>
      <h3 style="font-family:var(--fh);margin-bottom:1rem">Payment History</h3>
      <div class="tbl-wrap"><table><thead><tr><th>Booking ID</th><th>Property</th><th>Guest</th><th>Date</th><th>Rooms</th><th>Nights</th><th>Amount</th><th>Mode</th><th>Pay Status</th><th>Invoice</th></tr></thead>
      <tbody>${allBks.map(b => {
            const p = DB.getPropById(b.propertyId);
            const n = DB.nights(b.checkIn, b.checkOut);
            return `<tr>
          <td><code style="font-size:.75rem">${b.id}</code></td>
          <td>${p?.name || '—'}</td><td>${b.guestName}</td>
          <td>${DB.fmtDate(b.bookedAt)}</td>
          <td style="text-align:center">${b.rooms}</td><td style="text-align:center">${n}</td>
          <td style="font-weight:600;color:var(--coral)">${DB.fmt(b.totalAmount)}</td>
          <td>${payBadge(b.paymentMode, b.paymentStatus)}</td>
          <td>${b.paymentStatus === 'paid' ? '<span class="badge bg">Paid</span>' : '<span class="badge bo">Pending</span>'}</td>
          <td>${b.paymentMode === 'online' && b.paymentStatus === 'paid' ? `<button class="btn btn-outline btn-sm" onclick="genInvoice('${b.id}')">📄</button>` : '—'}</td>
        </tr>`;
        }).join('') || '<tr><td colspan="10" style="text-align:center;padding:2rem;color:var(--gray)">No payments yet</td></tr>'}
      </tbody></table></div>`;
    }
    document.getElementById('host-main').innerHTML = html;
}

window._hostBkAll = [];
function hostBkFilter(filter, btn) {
    document.querySelectorAll('#host-main .btn-outline').forEach(b => { b.style.background = ''; b.style.color = ''; b.style.borderColor = ''; });
    if (btn) { btn.style.background = 'var(--coral)'; btn.style.color = '#fff'; btn.style.borderColor = 'var(--coral)'; }
    const user = DB.getSession();
    const pids = DB.getPropsByHost(user.id).map(p => p.id);
    let bks = DB.getBookings().filter(b => pids.includes(b.propertyId));
    if (filter !== 'all') bks = bks.filter(b => b.status === filter);
    document.getElementById('host-bk-table').innerHTML = buildHostBkTable(bks);
}

function buildHostBkTable(bks) {
    return `<table><thead><tr><th>ID</th><th>Property</th><th>Guest</th><th>Check-in</th><th>Check-out</th><th>Rooms</th><th>Amount</th><th>Payment</th><th>Status</th><th>Actions</th></tr></thead>
  <tbody>${bks.map(b => {
        const p = DB.getPropById(b.propertyId);
        return `<tr>
      <td><code style="font-size:.75rem">${b.id}</code></td>
      <td>${p?.name || '—'}</td><td>${b.guestName}<br><span class="muted txs">${b.guestPhone}</span></td>
      <td>${DB.fmtDate(b.checkIn)}</td><td>${DB.fmtDate(b.checkOut)}</td>
      <td style="text-align:center">${b.rooms}</td>
      <td style="font-weight:600;color:var(--coral)">${DB.fmt(b.totalAmount)}</td>
      <td>${payBadge(b.paymentMode, b.paymentStatus)}</td>
      <td>${statusBadge(b.status)}</td>
      <td style="display:flex;gap:.3rem;flex-wrap:wrap">
        ${b.status === 'confirmed' ? `<button class="btn btn-teal btn-sm" onclick="hostMarkDone('${b.id}')">✓ Done</button>` : ''}
        ${b.paymentMode === 'online' && b.paymentStatus === 'paid' ? `<button class="btn btn-outline btn-sm" onclick="genInvoice('${b.id}')">📄</button>` : ''}
      </td>
    </tr>`;
    }).join('') || '<tr><td colspan="10" style="text-align:center;padding:2rem;color:var(--gray)">No bookings</td></tr>'}
  </tbody></table>`;
}

function buildHostPropList(props) {
    if (!props.length) return `<div class="empty"><div class="eicon">🏨</div><h3>No properties yet</h3><button class="btn btn-primary mt2" onclick="openAddProp()">+ Add Property</button></div>`;
    const scm = { approved: 'bg', pending: 'bo', rejected: 'br' };
    return props.map(p => {
        const bks = DB.getBookingsByProp(p.id);
        const rev = bks.filter(b => b.paymentStatus === 'paid').reduce((s, b) => s + b.totalAmount, 0);
        const avail = p.status === 'approved' ? DB.getAvailRooms(p.id, getToday(), getTomorrow()) : p.totalRooms;
        return `<div class="hpc">
      <div class="hpc-img"><img src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'"></div>
      <div>
        <div style="display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;margin-bottom:.3rem">
          <span style="font-weight:600;font-family:var(--fh)">${p.name}</span>
          <span class="badge ${scm[p.status]}">${p.status}</span>
          <span class="badge bgr">${p.type === 'hotel' ? '🏨' : '🛏'} ${p.type}</span>
        </div>
        <div class="muted tsm">📍 ${p.location}</div>
        <div style="display:flex;gap:1.5rem;margin:.4rem 0;font-size:.85rem">
          <span>🛏 ${p.totalRooms} rooms</span>
          <span>💰 ${DB.fmt(p.pricePerNight)}/night</span>
          <span>📅 ${bks.length} bookings</span>
          <span>💳 Rev: <strong>${DB.fmt(rev)}</strong></span>
        </div>
        ${p.status === 'approved' ? `<div class="txs muted">✅ ${avail}/${p.totalRooms} available today</div>` : ''}
        ${p.status === 'rejected' ? `<div style="color:#dc2626;font-size:.82rem">❌ Rejected by admin. Edit and resubmit.</div>` : ''}
      </div>
      <div class="hpc-acts">
        ${p.status === 'approved' ? `<button class="btn btn-outline btn-sm" onclick="viewProp('${p.id}')">👁 View</button>` : ''}
        <button class="btn btn-teal btn-sm" onclick="openEditProp('${p.id}')">✏️ Edit</button>
        <button class="btn btn-danger btn-sm" onclick="hostDetach('${p.id}')">🗑 Remove</button>
      </div>
    </div>`;
    }).join('');
}

function hostMarkDone(id) {
    const b = DB.getBookingById(id); b.status = 'completed';
    if (b.paymentMode === 'pay_at_hotel') b.paymentStatus = 'paid';
    DB.updateBooking(b); showToast('Marked as completed', 'success');
    hostTab(hostActiveTab, null);
}
function hostDetach(id) {
    if (!confirm('Remove this property? All future bookings will be cancelled.')) return;
    DB.removeProp(id); showToast('Property removed', 'info');
    hostTab('properties', null);
}

function openAddProp() {
    populateCityDropdown('ep-city', false);
    document.getElementById('prop-modal-h').textContent = 'Add New Property';
    document.getElementById('ep-id').value = '';
    ['ep-name', 'ep-addr', 'ep-desc', 'ep-img', 'ep-amen'].forEach(i => document.getElementById(i).value = '');
    document.getElementById('ep-type').value = 'hotel';
    document.getElementById('ep-price').value = '';
    document.getElementById('ep-rooms').value = '';
    document.getElementById('ep-guests').value = '2';
    openM('modal-prop');
}

function openEditProp(id) {
    populateCityDropdown('ep-city', false);
    const p = DB.getPropById(id);
    document.getElementById('prop-modal-h').textContent = 'Edit Property';
    document.getElementById('ep-id').value = p.id;
    document.getElementById('ep-name').value = p.name;
    document.getElementById('ep-type').value = p.type;
    document.getElementById('ep-city').value = p.cityId || '';
    document.getElementById('ep-addr').value = p.address;
    document.getElementById('ep-desc').value = p.description;
    document.getElementById('ep-price').value = p.pricePerNight;
    document.getElementById('ep-rooms').value = p.totalRooms;
    document.getElementById('ep-guests').value = p.maxGuestsPerRoom;
    document.getElementById('ep-img').value = p.images[0] || '';
    document.getElementById('ep-amen').value = p.amenities.join(', ');
    openM('modal-prop');
}

function saveProp() {
    const nm = document.getElementById('ep-name').value.trim();
    const type = document.getElementById('ep-type').value;
    const cid = document.getElementById('ep-city').value;
    const addr = document.getElementById('ep-addr').value.trim();
    const desc = document.getElementById('ep-desc').value.trim();
    const price = parseFloat(document.getElementById('ep-price').value);
    const rooms = parseInt(document.getElementById('ep-rooms').value);
    const maxg = parseInt(document.getElementById('ep-guests').value);
    const img = document.getElementById('ep-img').value.trim();
    const amen = document.getElementById('ep-amen').value.split(',').map(a => a.trim()).filter(Boolean);
    const eid = document.getElementById('ep-id').value;

    if (!nm || !cid || !addr || !desc || !price || !rooms || !maxg) { showToast('Fill all required fields', 'error'); return; }

    const city = DB.getCities().find(c => c.id === cid);
    const defImg = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800';
    const user = DB.getSession();

    if (eid) {
        const ex = DB.getPropById(eid);
        DB.updateProp({ ...ex, name: nm, type, cityId: cid, location: city?.name || cid, address: addr, description: desc, pricePerNight: price, totalRooms: rooms, maxGuestsPerRoom: maxg, amenities: amen, images: img ? [img] : ex.images, status: 'pending' });
        showToast('Property updated, sent for re-approval', 'success');
    } else {
        DB.addProp({ id: DB.genId('p'), hostId: user.id, name: nm, type, cityId: cid, location: city?.name || cid, address: addr, description: desc, pricePerNight: price, totalRooms: rooms, maxGuestsPerRoom: maxg, amenities: amen, images: img ? [img] : [defImg], status: 'pending', rating: 0, reviewCount: 0 });
        showToast('Property submitted for approval! 🎉', 'success');
    }
    closeM('modal-prop');
    hostTab('properties', null);
}

function setRegRole(role) {
    document.getElementById('reg-role').value = role;
    document.getElementById('reg-guest-btn').classList.toggle('active', role === 'customer');
    document.getElementById('reg-host-btn').classList.toggle('active', role === 'host');
    document.getElementById('host-note').classList.toggle('hidden', role !== 'host');
}

// ============================================================
// ADMIN DASHBOARD
// ============================================================
let adminActiveTab = 'overview';

function initAdmin() {
    const user = DB.getSession();
    if (!user || user.role !== 'admin') { nav('login'); return; }
    adminTab('overview', document.querySelector('#admin-sidebar .sb-link'));
}

function adminTab(tab, el) {
    adminActiveTab = tab;
    document.querySelectorAll('#admin-sidebar .sb-link').forEach(l => l.classList.remove('active'));
    if (el) el.classList.add('active');

    const props = DB.getProperties();
    const bookings = DB.getBookings().sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt));
    const users = DB.getUsers();
    const pending = props.filter(p => p.status === 'pending');
    const rev = bookings.filter(b => b.paymentStatus === 'paid').reduce((s, b) => s + b.totalAmount, 0);

    const apBadge = document.getElementById('ap-badge');
    if (apBadge) apBadge.textContent = pending.length || '';

    let html = '';
    if (tab === 'overview') {
        html = `
      <div class="between mb3">
        <div><h1 style="font-family:var(--fh);font-size:1.6rem">Admin Dashboard</h1><p class="muted">Platform overview</p></div>
        <span class="badge bc" style="font-size:.85rem;padding:.4rem 1rem">⚡ Admin Mode</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem;margin-bottom:2rem">
        <div class="stat-card"><div class="stat-icon si-coral">🏨</div><div><div class="stat-val">${props.length}</div><div class="stat-label">Properties</div></div></div>
        <div class="stat-card"><div class="stat-icon si-gold">⏳</div><div><div class="stat-val">${pending.length}</div><div class="stat-label">Awaiting Approval</div></div></div>
        <div class="stat-card"><div class="stat-icon si-teal">📅</div><div><div class="stat-val">${bookings.length}</div><div class="stat-label">Total Bookings</div></div></div>
        <div class="stat-card"><div class="stat-icon si-blue">👥</div><div><div class="stat-val">${users.length}</div><div class="stat-label">Users</div></div></div>
        <div class="stat-card"><div class="stat-icon si-coral">💰</div><div><div class="stat-val">${DB.fmt(rev)}</div><div class="stat-label">Revenue</div></div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
        <div>
          <h2 class="sec-title">Pending Approvals (${pending.length})</h2>
          ${buildApprovalList(pending.slice(0, 3))}
          ${pending.length > 3 ? `<button class="btn btn-outline btn-sm mt2" onclick="adminTab('approvals',document.querySelectorAll('#admin-sidebar .sb-link')[1])">View All ${pending.length} →</button>` : ''}
        </div>
        <div>
          <h2 class="sec-title">Recent Bookings</h2>
          <div class="tbl-wrap" style="max-height:400px;overflow-y:auto"><table><thead><tr><th>Property</th><th>Guest</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>${bookings.slice(0, 8).map(b => {
            const p = DB.getPropById(b.propertyId);
            return `<tr><td>${p?.name || '—'}</td><td>${b.guestName}</td><td style="font-weight:600">${DB.fmt(b.totalAmount)}</td><td>${statusBadge(b.status)}</td></tr>`;
        }).join('') || '<tr><td colspan="4" style="text-align:center;padding:2rem;color:var(--gray)">No bookings</td></tr>'}
          </tbody></table></div>
        </div>
      </div>`;
    } else if (tab === 'approvals') {
        html = `<h2 class="sec-title">Properties Pending Approval</h2>${buildApprovalList(pending) || `<div class="empty"><div class="eicon">✅</div><h3>All caught up!</h3><p>No pending approvals</p></div>`}`;
    } else if (tab === 'properties') {
        html = `<div class="between mb3">
      <h2 class="sec-title" style="margin:0">All Properties</h2>
      <div style="display:flex;gap:.5rem">
        <select class="fc" id="adm-sf" style="width:150px" onchange="adminRefreshProps()"><option value="">All Status</option><option value="approved">Approved</option><option value="pending">Pending</option><option value="rejected">Rejected</option></select>
        <select class="fc" id="adm-tf" style="width:130px" onchange="adminRefreshProps()"><option value="">All Types</option><option value="hotel">Hotel</option><option value="room">Room Stay</option></select>
      </div>
    </div><div id="adm-prop-list">${buildAdminPropList(props)}</div>`;
    } else if (tab === 'bookings') {
        html = `<h2 class="sec-title">All Bookings</h2>
      <div class="tbl-wrap"><table><thead><tr><th>ID</th><th>Property</th><th>Host</th><th>Guest</th><th>Check-in</th><th>Check-out</th><th>Rooms</th><th>Amount</th><th>Payment</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody>${bookings.map(b => {
            const p = DB.getPropById(b.propertyId);
            const h = DB.getUserById(p?.hostId);
            return `<tr>
          <td><code style="font-size:.72rem">${b.id}</code></td>
          <td>${p?.name || '—'}</td><td>${h?.name || '—'}</td>
          <td>${b.guestName}<br><span class="muted txs">${b.guestEmail}</span></td>
          <td>${DB.fmtDate(b.checkIn)}</td><td>${DB.fmtDate(b.checkOut)}</td>
          <td style="text-align:center">${b.rooms}</td>
          <td style="font-weight:600;color:var(--coral)">${DB.fmt(b.totalAmount)}</td>
          <td>${payBadge(b.paymentMode, b.paymentStatus)}</td>
          <td>${statusBadge(b.status)}</td>
          <td style="display:flex;gap:.3rem">
            ${b.status === 'confirmed' ? `<button class="btn btn-teal btn-sm" onclick="admMarkDone('${b.id}')">✓</button>
            <button class="btn btn-danger btn-sm" onclick="admCancelBk('${b.id}')">✕</button>` : ''}
          </td>
        </tr>`;
        }).join('') || '<tr><td colspan="11" style="text-align:center;padding:2rem;color:var(--gray)">No bookings</td></tr>'}
      </tbody></table></div>`;
    } else if (tab === 'users') {
        const hosts = users.filter(u => u.role === 'host');
        const guests = users.filter(u => u.role === 'customer');
        html = `<h2 class="sec-title">All Users</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
        <div class="card" style="padding:1.5rem">
          <h3 style="font-family:var(--fh);margin-bottom:1rem">🏠 Hosts (${hosts.length})</h3>
          ${hosts.map(u => `<div style="display:flex;align-items:center;gap:.8rem;padding:.8rem 0;border-bottom:1px solid var(--border)">
            <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--coral),var(--gold));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:.8rem;flex-shrink:0">${u.name.split(' ').map(n => n[0]).join('').toUpperCase()}</div>
            <div style="flex:1"><div style="font-weight:600;font-size:.9rem">${u.name}</div><div class="muted txs">${u.email}</div><div class="txs muted">${DB.getPropsByHost(u.id).length} properties</div></div>
          </div>`).join('') || '<div class="muted tsm">No hosts yet</div>'}
        </div>
        <div class="card" style="padding:1.5rem">
          <h3 style="font-family:var(--fh);margin-bottom:1rem">🧳 Guests (${guests.length})</h3>
          ${guests.map(u => `<div style="display:flex;align-items:center;gap:.8rem;padding:.8rem 0;border-bottom:1px solid var(--border)">
            <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--teal),var(--teal-d));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:.8rem;flex-shrink:0">${u.name.split(' ').map(n => n[0]).join('').toUpperCase()}</div>
            <div style="flex:1"><div style="font-weight:600;font-size:.9rem">${u.name}</div><div class="muted txs">${u.email}</div><div class="txs muted">${DB.getBookingsByCust(u.id).length} bookings</div></div>
          </div>`).join('') || '<div class="muted tsm">No guests yet</div>'}
        </div>
      </div>`;
    } else if (tab === 'revenue') {
        const online = bookings.filter(b => b.paymentMode === 'online' && b.paymentStatus === 'paid').reduce((s, b) => s + b.totalAmount, 0);
        html = `<h2 class="sec-title">Platform Revenue</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem;margin-bottom:2rem">
        <div class="stat-card"><div class="stat-icon si-coral">💰</div><div><div class="stat-val">${DB.fmt(rev)}</div><div class="stat-label">Total Revenue</div></div></div>
        <div class="stat-card"><div class="stat-icon si-teal">💳</div><div><div class="stat-val">${DB.fmt(online)}</div><div class="stat-label">Online Payments</div></div></div>
        <div class="stat-card"><div class="stat-icon si-blue">📅</div><div><div class="stat-val">${bookings.length}</div><div class="stat-label">Total Bookings</div></div></div>
        <div class="stat-card"><div class="stat-icon si-gold">✅</div><div><div class="stat-val">${bookings.filter(b => b.status === 'completed').length}</div><div class="stat-label">Completed</div></div></div>
      </div>
      <div class="tbl-wrap"><table><thead><tr><th>Booking ID</th><th>Property</th><th>Host</th><th>Guest</th><th>Date</th><th>Rooms</th><th>Amount</th><th>Mode</th><th>Pay Status</th><th>Invoice</th></tr></thead>
      <tbody>${bookings.map(b => {
            const p = DB.getPropById(b.propertyId);
            const h = DB.getUserById(p?.hostId);
            const n = DB.nights(b.checkIn, b.checkOut);
            return `<tr>
          <td><code style="font-size:.72rem">${b.id}</code></td>
          <td>${p?.name || '—'}</td><td>${h?.name || '—'}</td><td>${b.guestName}</td>
          <td>${DB.fmtDate(b.bookedAt)}</td>
          <td style="text-align:center">${b.rooms}</td>
          <td style="font-weight:600;color:var(--coral)">${DB.fmt(b.totalAmount)}</td>
          <td>${payBadge(b.paymentMode, b.paymentStatus)}</td>
          <td>${b.paymentStatus === 'paid' ? '<span class="badge bg">Paid</span>' : '<span class="badge bo">Pending</span>'}</td>
          <td>${b.paymentMode === 'online' && b.paymentStatus === 'paid' ? `<button class="btn btn-outline btn-sm" onclick="genInvoice('${b.id}')">📄</button>` : '—'}</td>
        </tr>`;
        }).join('') || '<tr><td colspan="10" style="text-align:center;padding:2rem;color:var(--gray)">No payments</td></tr>'}
      </tbody></table></div>`;
    }
    document.getElementById('admin-main').innerHTML = html;
}

function buildApprovalList(pending) {
    if (!pending.length) return '';
    return pending.map(p => {
        const h = DB.getUserById(p.hostId);
        return `<div class="hpc">
      <div class="hpc-img"><img src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'"></div>
      <div>
        <div style="font-weight:600;font-family:var(--fh)">${p.name}</div>
        <div class="muted tsm">📍 ${p.location} · ${p.type === 'hotel' ? '🏨 Hotel' : '🛏 Room Stay'}</div>
        <div class="tsm mt1">Host: <strong>${h?.name}</strong> (${h?.email})</div>
        <div style="font-size:.82rem;margin:.3rem 0;display:flex;gap:1rem">
          <span>💰 ${DB.fmt(p.pricePerNight)}/night</span><span>🛏 ${p.totalRooms} rooms</span><span>👥 Max ${p.maxGuestsPerRoom}/room</span>
        </div>
        <div class="tsm muted">${p.description.substring(0, 80)}...</div>
      </div>
      <div class="hpc-acts">
        <button class="btn btn-teal btn-sm" onclick="admApprove('${p.id}')">✅ Approve</button>
        <button class="btn btn-danger btn-sm" onclick="admOpenReject('${p.id}')">❌ Reject</button>
      </div>
    </div>`;
    }).join('');
}

function buildAdminPropList(props) {
    const scm = { approved: 'bg', pending: 'bo', rejected: 'br' };
    return props.map(p => {
        const h = DB.getUserById(p.hostId);
        const bks = DB.getBookingsByProp(p.id);
        return `<div class="hpc">
      <div class="hpc-img"><img src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'"></div>
      <div>
        <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-bottom:.2rem">
          <span style="font-weight:600;font-family:var(--fh)">${p.name}</span>
          <span class="badge ${scm[p.status]}">${p.status}</span>
          <span class="badge bgr">${p.type}</span>
        </div>
        <div class="muted tsm">📍 ${p.location} · Host: ${h?.name || '—'}</div>
        <div style="font-size:.82rem;margin-top:.3rem;display:flex;gap:1rem;flex-wrap:wrap">
          <span>💰 ${DB.fmt(p.pricePerNight)}/night</span><span>🛏 ${p.totalRooms} rooms</span><span>📅 ${bks.length} bookings</span>
        </div>
      </div>
      <div class="hpc-acts">
        ${p.status !== 'approved' ? `<button class="btn btn-teal btn-sm" onclick="admApprove('${p.id}')">✅ Approve</button>` : ''}
        ${p.status !== 'rejected' ? `<button class="btn btn-danger btn-sm" onclick="admOpenReject('${p.id}')">❌ Reject</button>` : ''}
        ${p.status === 'approved' ? `<button class="btn btn-outline btn-sm" onclick="viewProp('${p.id}')">👁</button>` : ''}
        <button class="btn btn-danger btn-sm" onclick="admDelProp('${p.id}')">🗑</button>
      </div>
    </div>`;
    }).join('') || `<div class="empty"><div class="eicon">🏚</div><h3>No properties</h3></div>`;
}

function adminRefreshProps() {
    let props = DB.getProperties();
    const sf = document.getElementById('adm-sf')?.value;
    const tf = document.getElementById('adm-tf')?.value;
    if (sf) props = props.filter(p => p.status === sf);
    if (tf) props = props.filter(p => p.type === tf);
    document.getElementById('adm-prop-list').innerHTML = buildAdminPropList(props);
}

function admApprove(id) {
    const p = DB.getPropById(id); p.status = 'approved'; DB.updateProp(p);
    showToast(`"${p.name}" is now live! ✅`, 'success');
    adminTab(adminActiveTab, null);
}
function admOpenReject(id) { document.getElementById('rej-pid').value = id; document.getElementById('rej-reason').value = ''; openM('modal-reject'); }
function confirmReject() {
    const id = document.getElementById('rej-pid').value;
    const p = DB.getPropById(id); p.status = 'rejected'; DB.updateProp(p);
    closeM('modal-reject'); showToast(`"${p.name}" rejected`, 'info');
    adminTab(adminActiveTab, null);
}
function admDelProp(id) {
    if (!confirm('Permanently delete this property?')) return;
    DB.removeProp(id); showToast('Property deleted', 'info');
    adminTab(adminActiveTab, null);
}
function admMarkDone(id) {
    const b = DB.getBookingById(id); b.status = 'completed';
    if (b.paymentMode === 'pay_at_hotel') b.paymentStatus = 'paid';
    DB.updateBooking(b); showToast('Booking completed', 'success');
    adminTab(adminActiveTab, null);
}
function admCancelBk(id) {
    if (!confirm('Cancel this booking?')) return;
    const b = DB.getBookingById(id); b.status = 'cancelled'; DB.updateBooking(b);
    showToast('Booking cancelled', 'info'); adminTab(adminActiveTab, null);
}

// ============================================================
// AUTH
// ============================================================
function doLogin() {
    const em = document.getElementById('li-email').value.trim();
    const pw = document.getElementById('li-pwd').value;
    if (!em || !pw) { showToast('Enter email and password', 'error'); return; }
    const user = DB.getUserByEmail(em);
    if (!user || user.password !== pw) { showToast('Invalid email or password', 'error'); return; }
    DB.setSession(user);
    showToast(`Welcome, ${user.name}! 🎉`);
    setTimeout(() => {
        if (user.role === 'admin') nav('admin');
        else if (user.role === 'host') nav('host');
        else nav('customer');
    }, 700);
}

function doRegister() {
    const fn = document.getElementById('reg-fname').value.trim();
    const ln = document.getElementById('reg-lname').value.trim();
    const em = document.getElementById('reg-email').value.trim();
    const ph = document.getElementById('reg-phone').value.trim();
    const pw = document.getElementById('reg-pwd').value;
    const rl = document.getElementById('reg-role').value;
    if (!fn || !ln || !em || !pw) { showToast('Fill all required fields', 'error'); return; }
    if (pw.length < 6) { showToast('Password min 6 characters', 'error'); return; }
    if (DB.getUserByEmail(em)) { showToast('Email already registered', 'error'); return; }
    const user = { id: DB.genId('u'), name: `${fn} ${ln}`, email: em, phone: ph, password: pw, role: rl };
    DB.addUser(user); DB.setSession(user);
    showToast(`Welcome to StayNest, ${fn}! 🎉`);
    setTimeout(() => { if (rl === 'host') nav('host'); else nav('customer'); }, 700);
}

// ============================================================
// PROFILE
// ============================================================
function initProfile() {
    const user = DB.getSession();
    if (!user) { nav('login'); return; }
    const ini = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    document.getElementById('prof-av').textContent = ini;
    document.getElementById('prof-name').textContent = user.name;
    document.getElementById('prof-role').textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
    document.getElementById('pf-name').value = user.name;
    document.getElementById('pf-email').value = user.email;
    document.getElementById('pf-phone').value = user.phone || '';
    document.getElementById('pf-pwd').value = '';
}
function saveProfile() {
    const user = DB.getSession();
    const nm = document.getElementById('pf-name').value.trim();
    const ph = document.getElementById('pf-phone').value.trim();
    const pw = document.getElementById('pf-pwd').value;
    if (!nm) { showToast('Name required', 'error'); return; }
    if (pw && pw.length < 6) { showToast('Password min 6 chars', 'error'); return; }
    const upd = { ...user, name: nm, phone: ph };
    if (pw) upd.password = pw;
    DB.updateUser(upd); DB.setSession(upd);
    showToast('Profile updated! ✅');
    document.getElementById('prof-name').textContent = nm;
    document.getElementById('prof-av').textContent = nm.split(' ').map(n => n[0]).join('').toUpperCase();
}
function goDash() {
    const user = DB.getSession();
    if (!user) nav('home');
    else if (user.role === 'admin') nav('admin');
    else if (user.role === 'host') nav('host');
    else nav('customer');
}

// ============================================================
// INIT
// ============================================================
DB.init();
renderNavbar();
initHome();
