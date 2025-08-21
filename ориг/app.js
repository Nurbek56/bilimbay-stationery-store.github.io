// КанцМаркет - JavaScript Application
// State Management and Product Data

// Product Database with Variants
// Product Database with Variants
const PRODUCTS = [
    {
        id: "p001",
        title: "Ручка гелевая SmoothWrite 0.5 школа",
        brand: "Школа и Офис",
        category: "Письменные",
        color: "синий",
        price: 89,
        sale: 0,
        isNew: true,
        rating: 4.6,
        tags: ["школа", "офис"],
        icon: "🖊️",
        description: "Гелевая ручка с плавным письмом",
        variants: [
            { id: "p001-blue",  name: "Синий",   color: "синий",   price: 89, stock: 15 },
            { id: "p001-black", name: "Чёрный",  color: "чёрный",  price: 89, stock: 20 },
            { id: "p001-red",   name: "Красный", color: "красный", price: 95, stock: 8  }
        ]
    },
    {
        id: "p002",
        title: "Тетрадь общая 48 листов",
        brand: "Школа",
        category: "Тетради и бумага",
        color: "белый",
        price: 45,
        sale: 15,
        isNew: false,
        rating: 4.3,
        tags: ["школа"],
        icon: "📒",
        description: "Тетрадь в клетку для школы",
        variants: [
            { id: "p002-48",  name: "48 листов",  size: "48л",  price: 45, stock: 25 },
            { id: "p002-96",  name: "96 листов",  size: "96л",  price: 65, stock: 18 },
            { id: "p002-120", name: "120 листов", size: "120л", price: 85, stock: 12 }
        ]
    },
    {
        id: "p003",
        title: "Маркер текстовый FlexiMark",
        brand: "Школа и Офис",
        category: "Письменные",
        color: "жёлтый",
        price: 125,
        sale: 0,
        isNew: true,
        rating: 4.8,
        tags: ["офис", "школа"],
        icon: "🖍️",
        description: "Текстовый маркер для выделения",
        variants: [
            { id: "p003-yellow", name: "Жёлтый",  color: "жёлтый",  price: 125, stock: 25 },
            { id: "p003-green",  name: "Зелёный", color: "зелёный", price: 125, stock: 18 },
            { id: "p003-pink",   name: "Розовый", color: "розовый", price: 125, stock: 16 },
            { id: "p003-orange", name: "Оранжевый", color: "оранжевый", price: 125, stock: 12 }
        ]
    },
    {
        id: "p004",
        title: "Бумага офисная A4 500 листов",
        brand: "Офис",
        category: "Тетради и бумага",
        color: "белый",
        price: 320,
        sale: 10,
        isNew: false,
        rating: 4.5,
        tags: ["офис"],
        icon: "📄",
        description: "Качественная офисная бумага"
    },
    {
        id: "p005",
        title: "Папка-регистратор А4",
        brand: "Офис",
        category: "Организация",
        color: "синий",
        price: 180,
        sale: 0,
        isNew: false,
        rating: 4.2,
        tags: ["офис"],
        icon: "📁",
        description: "Папка для документов",
        variants: [
            { id: "p005-blue",  name: "Синий",   color: "синий",   price: 180, stock: 30 },
            { id: "p005-black", name: "Чёрный",  color: "чёрный",  price: 180, stock: 28 },
            { id: "p005-red",   name: "Красный", color: "красный", price: 180, stock: 20 },
            { id: "p005-green", name: "Зелёный", color: "зелёный", price: 185, stock: 16 }
        ]
    },
    {
        id: "p006",
        title: "Рюкзак школьный ErgoBag",
        brand: "Школа",
        category: "Организация",
        color: "синий",
        price: 2500,
        sale: 20,
        isNew: true,
        rating: 4.9,
        tags: ["школа"],
        icon: "🎒",
        description: "Эргономичный школьный рюкзак",
        variants: [
            { id: "p006-blue",  name: "Синий",   color: "синий",   price: 2500, stock: 5 },
            { id: "p006-red",   name: "Красный", color: "красный", price: 2500, stock: 3 },
            { id: "p006-green", name: "Зелёный", color: "зелёный", price: 2600, stock: 4 },
            { id: "p006-black", name: "Чёрный",  color: "чёрный",  price: 2700, stock: 6 }
        ]
    },
    {
        id: "p007",
        title: "Набор карандашей цветных 24 шт",
        brand: "Школа и Творчества",
        category: "Для творчества",
        color: "разноцветный",
        price: 450,
        sale: 0,
        isNew: false,
        rating: 4.7,
        tags: ["творчество", "школа"],
        icon: "🎨",
        description: "Набор цветных карандашей",
        variants: [
            { id: "p007-12", name: "12 цветов", count: "12шт", price: 280, stock: 30 },
            { id: "p007-24", name: "24 цвета",  count: "24шт", price: 450, stock: 20 },
            { id: "p007-36", name: "36 цветов", count: "36шт", price: 650, stock: 15 },
            { id: "p007-48", name: "48 цветов", count: "48шт", price: 890, stock: 8  }
        ]
    },
    {
        id: "p008",
        title: "Калькулятор инженерный ProCalc",
        brand: "Школа и Офис",
        category: "Техника",
        color: "чёрный",
        price: 890,
        sale: 0,
        isNew: true,
        rating: 4.4,
        tags: ["офис", "школа"],
        icon: "🧮",
        description: "Инженерный калькулятор",
        variants: [
            { id: "p008-basic",      name: "Базовый",       type: "basic",       price: 790, stock: 20 },
            { id: "p008-scientific",  name: "Научный",       type: "scientific",  price: 890, stock: 15 },
            { id: "p008-engineering", name: "Инженерный+",   type: "engineering", price: 1090, stock: 10 }
        ]
    },
    {
        id: "p009",
        title: "Ластик белый мягкий",
        brand: "Школа",
        category: "Письменные",
        color: "белый",
        price: 25,
        sale: 0,
        isNew: false,
        rating: 4.1,
        tags: ["школа"],
        icon: "🧽",
        description: "Мягкий ластик для карандашей"
    },
    {
        id: "p010",
        title: "Линейка металлическая 30 см",
        brand: "Школа и Офис",
        category: "Письменные",
        color: "серебристый",
        price: 95,
        sale: 0,
        isNew: false,
        rating: 4.6,
        tags: ["школа", "офис"],
        icon: "📐",
        description: "Металлическая линейка",
        variants: [
            { id: "p010-20", name: "20 см", length: "20см", price: 65,  stock: 25 },
            { id: "p010-30", name: "30 см", length: "30см", price: 95,  stock: 22 },
            { id: "p010-50", name: "50 см", length: "50см", price: 150, stock: 12 }
        ]
    },
    {
        id: "p011",
        title: "Скрепки канцелярские 100 шт",
        brand: "Офис",
        category: "Офис",
        color: "серебристый",
        price: 35,
        sale: 0,
        isNew: false,
        rating: 4.0,
        tags: ["офис"],
        icon: "📎",
        description: "Металлические скрепки",
    },
    {
        id: "p012",
        title: "Клей-карандаш 15г",
        brand: "Школа и Творчества",
        category: "Для творчества",
        color: "белый",
        price: 55,
        sale: 0,
        isNew: false,
        rating: 4.3,
        tags: ["школа", "творчество"],
        icon: "🖇️",
        description: "Клей-карандаш для бумаги",
        variants: [
            { id: "p012-10g", name: "10 г", size: "10г", price: 45, stock: 30 },
            { id: "p012-15g", name: "15 г", size: "15г", price: 55, stock: 25 },
            { id: "p012-25g", name: "25 г", size: "25г", price: 85, stock: 18 }
        ]
    },
    {
        id: "p013",
        title: "Степлер настольный Heavy Duty",
        brand: "Офис",
        category: "Офис",
        color: "чёрный",
        price: 650,
        sale: 15,
        isNew: false,
        rating: 4.8,
        tags: ["офис"],
        icon: "📌",
        description: "Мощный настольный степлер",
    },
    {
        id: "p014",
        title: "Пенал школьный с отделениями",
        brand: "Школа",
        category: "Организация",
        color: "синий",
        price: 280,
        sale: 0,
        isNew: true,
        rating: 4.5,
        tags: ["школа"],
        icon: "📦",
        description: "Пенал с несколькими отделениями",
        variants: [
            { id: "p014-blue",  name: "Синий",   color: "синий",   price: 280, stock: 20 },
            { id: "p014-pink",  name: "Розовый", color: "розовый", price: 280, stock: 18 },
            { id: "p014-black", name: "Чёрный",  color: "чёрный",  price: 295, stock: 12 }
        ]
    },
    {
        id: "p015",
        title: "Краски акварельные 12 цветов",
        brand: "Творчества",
        category: "Для творчества",
        color: "разноцветный",
        price: 380,
        sale: 0,
        isNew: false,
        rating: 4.6,
        tags: ["творчество"],
        icon: "🎨",
        description: "Набор акварельных красок",
        variants: [
            { id: "p015-12", name: "12 цветов", count: "12", price: 380, stock: 25 },
            { id: "p015-18", name: "18 цветов", count: "18", price: 520, stock: 18 },
            { id: "p015-24", name: "24 цвета",  count: "24", price: 690, stock: 12 }
        ]
    },
    {
        id: "p016",
        title: "Дырокол офисный на 2 отверстия",
        brand: "Офис",
        category: "Офис",
        color: "чёрный",
        price: 420,
        sale: 0,
        isNew: false,
        rating: 4.4,
        tags: ["офис"],
        icon: "🕳️",
        description: "Офисный дырокол"
    },
    {
        id: "p017",
        title: "Ручка шариковая синяя 10 шт",
        brand: "Школа и Офис",
        category: "Письменные",
        color: "синий",
        price: 150,
        sale: 25,
        isNew: false,
        rating: 4.2,
        tags: ["школа", "офис"],
        icon: "✒️",
        description: "Набор шариковых ручек",
    },
    {
        id: "p018",
        title: "Блокнот А5 спираль 80 листов",
        brand: "Офис",
        category: "Тетради и бумага",
        color: "белый",
        price: 185,
        sale: 0,
        isNew: true,
        rating: 4.7,
        tags: ["офис"],
        icon: "📓",
        description: "Блокнот на спирали",
        variants: [
            { id: "p018-60",  name: "60 листов",  size: "60л",  price: 145, stock: 22 },
            { id: "p018-80",  name: "80 листов",  size: "80л",  price: 185, stock: 18 },
            { id: "p018-120", name: "120 листов", size: "120л", price: 240, stock: 14 }
        ]
    },
    {
        id: "p019",
        title: "Точилка для карандашей электрическая",
        brand: "Школа и Офис",
        category: "Техника",
        color: "белый",
        price: 1200,
        sale: 0,
        isNew: true,
        rating: 4.5,
        tags: ["офис", "школа"],
        icon: "⚡",
        description: "Электрическая точилка",
    },
    {
        id: "p020",
        title: "Корректор-ручка 12 мл",
        brand: "Школа и Офис",
        category: "Письменные",
        color: "белый",
        price: 75,
        sale: 0,
        isNew: false,
        rating: 4.1,
        tags: ["офис", "школа"],
        icon: "🖊️",
        description: "Корректор для исправлений",
        variants: [
            { id: "p020-7ml",  name: "7 мл",  size: "7мл",  price: 55, stock: 25 },
            { id: "p020-12ml", name: "12 мл", size: "12мл", price: 75, stock: 20 },
            { id: "p020-18ml", name: "18 мл", size: "18мл", price: 95, stock: 14 }
        ]
    },
    {
        id: "p021",
        title: "Доска магнитно-маркерная А3",
        brand: "Офис",
        category: "Офис",
        color: "белый",
        price: 850,
        sale: 10,
        isNew: false,
        rating: 4.6,
        tags: ["офис"],
        icon: "📋",
        description: "Магнитно-маркерная доска",
    },
    {
        id: "p022",
        title: "Альбом для рисования А4 40 листов",
        brand: "Школа и Творчества",
        category: "Для творчества",
        color: "белый",
        price: 120,
        sale: 0,
        isNew: false,
        rating: 4.4,
        tags: ["творчество", "школа"],
        icon: "📖",
        description: "Альбом для рисования",
        variants: [
            { id: "p022-20", name: "20 листов", size: "20л", price: 70,  stock: 30 },
            { id: "p022-40", name: "40 листов", size: "40л", price: 120, stock: 22 },
            { id: "p022-80", name: "80 листов", size: "80л", price: 210, stock: 12 }
        ]
    },
    {
        id: "p023",
        title: "Органайзер настольный 6 отделений",
        brand: "Офис",
        category: "Организация",
        color: "чёрный",
        price: 590,
        sale: 0,
        isNew: true,
        rating: 4.8,
        tags: ["офис"],
        icon: "🗂️",
        description: "Настольный органайзер",
        variants: [
            { id: "p023-black", name: "Чёрный", color: "чёрный", price: 590, stock: 18 },
            { id: "p023-white", name: "Белый",  color: "белый",  price: 610, stock: 12 },
            { id: "p023-gray",  name: "Серый",  color: "серый",  price: 590, stock: 14 }
        ]
    },
    {
        id: "p024",
        title: "Ножницы канцелярские 21 см",
        brand: "Школа и Офис",
        category: "Письменные",
        color: "серебристый",
        price: 165,
        sale: 0,
        isNew: false,
        rating: 4.3,
        tags: ["офис", "школа"],
        icon: "✂️",
        description: "Канцелярские ножницы",
    }
];


// Application State
const state = {
    filters: {
        search: '',
        category: '',
        brands: [],
        colors: [],
        minPrice: '',
        maxPrice: '',
        onlyNew: false,
        onlySale: false
    },
    sort: 'default',
    cart: JSON.parse(localStorage.getItem('kancmarket_cart') || '[]'),
    promoCode: '',
    discount: 0,
    // Новое состояние для модального окна вариантов
    productVariantsModal: {
        isOpen: false,
        product: null,
        selectedVariant: null
    }
};

// Utility Functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
};

const calculateSalePrice = (price, sale) => {
    return Math.round(price * (1 - sale / 100));
};

const generateOrderNumber = () => {
    return 'KM' + Date.now().toString().slice(-6);
};

// Phone number mask
const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }
    return value;
};

// Cart Functions
const saveCart = () => {
    localStorage.setItem('kancmarket_cart', JSON.stringify(state.cart));
};

// Функция добавления товара в корзину (обновлена для работы с вариантами)
const addToCart = (productId, variantId = null) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let cartItemId = productId;
    let selectedVariant = null;

    // Если указан вариант, используем его
    if (variantId && product.variants) {
        selectedVariant = product.variants.find(v => v.id === variantId);
        if (selectedVariant) {
            cartItemId = variantId;
        }
    }

    const existingItem = state.cart.find(item => item.id === cartItemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            id: cartItemId,
            quantity: 1,
            product: product,
            variant: selectedVariant
        });
    }
    saveCart();
    updateCartUI();
    updateCartCount();
};

const removeFromCart = (productId) => {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    updateCartCount();
};

const updateCartQuantity = (productId, quantity) => {
    const item = state.cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCartUI();
            updateCartCount();
        }
    }
};

const calculateCartTotal = () => {
    const subtotal = state.cart.reduce((total, item) => {
        // Используем цену варианта, если он выбран
        let price = item.variant ? item.variant.price : item.product.price;
        if (item.product.sale > 0) {
            price = calculateSalePrice(price, item.product.sale);
        }
        return total + (price * item.quantity);
    }, 0);

    const discountAmount = Math.round(subtotal * state.discount);
    const total = subtotal - discountAmount;

    return { subtotal, discountAmount, total };
};

const applyPromoCode = (code) => {
    if (code.toUpperCase() === 'SCHOOL10') {
        state.promoCode = code;
        state.discount = 0.1;
        return true;
    }
    return false;
};

// Filter Functions
const filterProducts = () => {
    let filtered = [...PRODUCTS];

    // Search filter
    if (state.filters.search) {
        const searchTerm = state.filters.search.toLowerCase();
        filtered = filtered.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    // Category filter
    if (state.filters.category) {
        filtered = filtered.filter(product => product.category === state.filters.category);
    }

    // Brand filter
    if (state.filters.brands.length > 0) {
        filtered = filtered.filter(product => state.filters.brands.includes(product.brand));
    }

    // Color filter
    if (state.filters.colors.length > 0) {
        filtered = filtered.filter(product => state.filters.colors.includes(product.color));
    }

    // Price filter
    if (state.filters.minPrice) {
        filtered = filtered.filter(product => product.price >= parseInt(state.filters.minPrice));
    }
    if (state.filters.maxPrice) {
        filtered = filtered.filter(product => product.price <= parseInt(state.filters.maxPrice));
    }

    // New products filter
    if (state.filters.onlyNew) {
        filtered = filtered.filter(product => product.isNew);
    }

    // Sale products filter
    if (state.filters.onlySale) {
        filtered = filtered.filter(product => product.sale > 0);
    }

    return filtered;
};

const sortProducts = (products) => {
    const sorted = [...products];

    switch (state.sort) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'new':
            return sorted.sort((a, b) => {
                if (a.isNew && !b.isNew) return -1;
                if (!a.isNew && b.isNew) return 1;
                return 0;
            });
        default:
            return sorted;
    }
};

// UI Update Functions
const updateCartCount = () => {
    const count = state.cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
};

const updateCartUI = () => {
    const cartContent = document.getElementById('cartContent');
    const cartFooter = document.getElementById('cartFooter');
    const emptyCart = document.getElementById('emptyCart');

    if (state.cart.length === 0) {
        emptyCart.style.display = 'block';
        cartFooter.style.display = 'none';
        cartContent.innerHTML = '<div class="empty-cart"><p>Корзина пуста</p></div>';
        return;
    }

    emptyCart.style.display = 'none';
    cartFooter.style.display = 'block';

    const cartHTML = state.cart.map(item => {
        // Определяем цену с учётом варианта
        let price = item.variant ? item.variant.price : item.product.price;
        if (item.product.sale > 0) {
            price = calculateSalePrice(price, item.product.sale);
        }

        // Формируем название с учётом варианта
        let title = item.product.title;
        if (item.variant) {
            title += ` (${item.variant.name})`;
        }

        return `
            <div class="cart-item">
                <div class="cart-item-icon">${item.product.icon}</div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${title}</div>
                    <div class="cart-item-price">${formatPrice(price)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="removeFromCart('${item.id}')">Удалить</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    cartContent.innerHTML = cartHTML;

    // Update totals
    const { subtotal, discountAmount, total } = calculateCartTotal();
    document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('cartTotal').textContent = formatPrice(total);

    const discountLine = document.getElementById('discountLine');
    if (state.discount > 0) {
        document.getElementById('cartDiscount').textContent = '-' + formatPrice(discountAmount);
        discountLine.style.display = 'flex';
    } else {
        discountLine.style.display = 'none';
    }
};

const renderProducts = () => {
    const filtered = filterProducts();
    const sorted = sortProducts(filtered);
    const grid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');

    resultsCount.textContent = `Найдено товаров: ${sorted.length}`;

    if (sorted.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noResults.style.display = 'none';

    const fragment = document.createDocumentFragment();

    sorted.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const salePrice = product.sale > 0 ? calculateSalePrice(product.price, product.sale) : null;

        card.innerHTML = `
            <div class="product-header">
                <div class="product-icon">${product.icon}</div>
                <div class="product-badges">
                    ${product.isNew ? '<span class="badge badge-new">Новинка</span>' : ''}
                    ${product.sale > 0 ? `<span class="badge badge-sale">-${product.sale}%</span>` : ''}
                </div>
            </div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-brand">${product.brand}</div>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div class="product-price">
                    <div class="price-current">${formatPrice(salePrice || product.price)}</div>
                    ${salePrice ? `<div class="price-original">${formatPrice(product.price)}</div>` : ''}
                </div>
                <button class="add-to-cart" onclick="handleProductClick('${product.id}')">
                    ${product.variants ? 'Выбрать' : 'В корзину'}
                </button>
            </div>
        `;

        fragment.appendChild(card);
    });

    grid.innerHTML = '';
    grid.appendChild(fragment);
};

// Event Handlers
const handleSearch = debounce((value) => {
    state.filters.search = value;
    renderProducts();
}, 300);

const handleFilterChange = () => {
    // Category
    const categoryInputs = document.querySelectorAll('input[name="category"]');
    categoryInputs.forEach(input => {
        if (input.checked) {
            state.filters.category = input.value;
        }
    });

    // Brands
    const brandInputs = document.querySelectorAll('input[name="brand"]:checked');
    state.filters.brands = Array.from(brandInputs).map(input => input.value);

    // Colors
    const colorInputs = document.querySelectorAll('input[name="color"]:checked');
    state.filters.colors = Array.from(colorInputs).map(input => input.value);

    // Price
    state.filters.minPrice = document.getElementById('minPrice').value;
    state.filters.maxPrice = document.getElementById('maxPrice').value;

    // Flags
    state.filters.onlyNew = document.getElementById('onlyNew').checked;
    state.filters.onlySale = document.getElementById('onlySale').checked;

    renderProducts();
};

const handleSortChange = (value) => {
    state.sort = value;
    renderProducts();
};

const handleQuickFilter = (tag) => {
    // Reset filters
    state.filters = {
        search: '',
        category: '',
        brands: [],
        colors: [],
        minPrice: '',
        maxPrice: '',
        onlyNew: false,
        onlySale: false
    };

    // Apply tag filter through search
    state.filters.search = tag;

    // Update UI
    document.getElementById('searchInput').value = tag;
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
    });
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';

    renderProducts();

    // Scroll to products
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
};

// Form Validation
const validateForm = (form) => {
    const errors = {};
    const formData = new FormData(form);

    // Required fields
    const requiredFields = ['customerName', 'customerPhone', 'customerEmail', 'customerCity'];
    requiredFields.forEach(field => {
        const value = formData.get(field) || document.getElementById(field).value;
        if (!value || !value.trim()) {
            errors[field] = 'Это поле обязательно для заполнения';
        }
    });

    // Email validation
    const email = formData.get('customerEmail') || document.getElementById('customerEmail').value;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.customerEmail = 'Введите корректный email';
    }

    // Phone validation
    const phone = formData.get('customerPhone') || document.getElementById('customerPhone').value;
    if (phone && !/^\+?\d[\d\s\-\(\)]{8,}$/.test(phone.replace(/\s/g, ''))) {
        errors.customerPhone = 'Введите корректный номер телефона';
    }

    // Radio button validation
    if (!formData.get('delivery')) {
        errors.delivery = 'Выберите способ доставки';
    }

    if (!formData.get('payment')) {
        errors.payment = 'Выберите способ оплаты';
    }

    return errors;
};

const showFormErrors = (errors) => {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Show new errors
    Object.keys(errors).forEach(field => {
        const errorElement = document.querySelector(`#${field} + .error-message, input[name="${field}"] ~ .error-message`);
        if (errorElement) {
            errorElement.textContent = errors[field];
        }
    });
};

// Modal Functions
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
};

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.classList.remove('open');
    document.body.style.overflow = '';
};

// Initialize Application
const init = () => {
    // Render initial products
    renderProducts();
    updateCartCount();
    updateCartUI();

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

    // Filter event listeners
    document.querySelectorAll('input[name="category"], input[name="brand"], input[name="color"], #onlyNew, #onlySale').forEach(input => {
        input.addEventListener('change', handleFilterChange);
    });

    document.getElementById('minPrice').addEventListener('input', debounce(handleFilterChange, 500));
    document.getElementById('maxPrice').addEventListener('input', debounce(handleFilterChange, 500));

    // Sort functionality
    document.getElementById('sortSelect').addEventListener('change', (e) => handleSortChange(e.target.value));

    // Apply filters button
    document.querySelector('.apply-filters').addEventListener('click', handleFilterChange);

    // Cart functionality
    document.getElementById('cartBtn').addEventListener('click', () => {
        document.getElementById('cartPanel').classList.add('open');
    });

    document.getElementById('cartClose').addEventListener('click', () => {
        document.getElementById('cartPanel').classList.remove('open');
    });

    // Promo code
    document.getElementById('applyPromo').addEventListener('click', () => {
        const promoInput = document.getElementById('promoInput');
        const code = promoInput.value.trim();

        if (applyPromoCode(code)) {
            updateCartUI();
            promoInput.style.borderColor = 'var(--success-color)';
            setTimeout(() => {
                promoInput.style.borderColor = '';
            }, 2000);
        } else {
            promoInput.style.borderColor = 'var(--error-color)';
            setTimeout(() => {
                promoInput.style.borderColor = '';
            }, 2000);
        }
    });

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        document.getElementById('cartPanel').classList.remove('open');
        openModal('checkoutModal');
    });

    // Checkout form
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const errors = validateForm(e.target);

        if (Object.keys(errors).length > 0) {
            showFormErrors(errors);
            return;
        }

        // Generate order number
        const orderNumber = generateOrderNumber();
        document.getElementById('orderNumber').textContent = orderNumber;

        // Clear cart
        state.cart = [];
        state.promoCode = '';
        state.discount = 0;
        saveCart();
        updateCartCount();
        updateCartUI();

        // Show success modal
        closeModal('checkoutModal');
        openModal('successModal');

        // Reset form
        e.target.reset();
    });

    // Phone number formatting
    document.getElementById('customerPhone').addEventListener('input', (e) => {
        e.target.value = formatPhoneNumber(e.target.value);
    });

    // Modal close handlers
    document.querySelectorAll('.modal-close, #successOk').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });

    // Click outside modal to close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay.id);
            }
        });
    });

    // Quick filter buttons
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            handleQuickFilter(filter);
        });
    });

    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mobileMenuOverlay').classList.add('open');
    });

    document.getElementById('mobileMenuClose').addEventListener('click', () => {
        document.getElementById('mobileMenuOverlay').classList.remove('open');
    });

    document.getElementById('mobileMenuOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            document.getElementById('mobileMenuOverlay').classList.remove('open');
        }
    });

    // Mobile filters
    document.getElementById('filtersToggle').addEventListener('click', () => {
        document.getElementById('filtersPanel').classList.add('open');
    });

    document.getElementById('filtersClose').addEventListener('click', () => {
        document.getElementById('filtersPanel').classList.remove('open');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Escape key closes modals and panels
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.open').forEach(modal => {
                closeModal(modal.id);
            });

            document.getElementById('cartPanel').classList.remove('open');
            document.getElementById('mobileMenuOverlay').classList.remove('open');
            document.getElementById('filtersPanel').classList.remove('open');
        }
    });
};

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// ===== НОВАЯ ФУНКЦИОНАЛЬНОСТЬ: МОДАЛЬНОЕ ОКНО ВАРИАНТОВ =====

/**
 * Обработчик клика по товару
 * Если у товара есть варианты - открывает модальное окно
 * Если нет - сразу добавляет в корзину
 */
let handleProductClick = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Если у товара есть варианты, открываем модальное окно
    if (product.variants && product.variants.length > 0) {
        openProductVariantsModal(product);
    } else {
        // Если вариантов нет, сразу добавляем в корзину
        addToCart(productId);
    }
};

/**
 * Открытие модального окна с вариантами товара
 */
const openProductVariantsModal = (product) => {
    state.productVariantsModal.isOpen = true;
    state.productVariantsModal.product = product;
    state.productVariantsModal.selectedVariant = product.variants[0]; // Выбираем первый вариант по умолчанию

    renderProductVariantsModal();
    document.body.style.overflow = 'hidden';
};

/**
 * Закрытие модального окна с вариантами
 */
let closeProductVariantsModal = () => {
    state.productVariantsModal.isOpen = false;
    state.productVariantsModal.product = null;
    state.productVariantsModal.selectedVariant = null;

    const modal = document.getElementById('productVariantsModal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
    document.body.style.overflow = '';
};

/**
 * Выбор варианта товара
 */
let selectProductVariant = (variantId) => {
    if (!state.productVariantsModal.product) return;

    const variant = state.productVariantsModal.product.variants.find(v => v.id === variantId);
    if (variant) {
        state.productVariantsModal.selectedVariant = variant;
        updateVariantSelection();
    }
};

/**
 * Обновление отображения выбранного варианта
 */
const updateVariantSelection = () => {
    const variants = document.querySelectorAll('.variant-option');
    variants.forEach(option => {
        const variantId = option.getAttribute('data-variant-id');
        if (variantId === state.productVariantsModal.selectedVariant.id) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });

    // Обновляем цену
    const priceElement = document.getElementById('modalPrice');
    const stockElement = document.getElementById('modalStock');
    if (priceElement && stockElement) {
        const variant = state.productVariantsModal.selectedVariant;
        const product = state.productVariantsModal.product;

        let price = variant.price;
        if (product.sale > 0) {
            const salePrice = calculateSalePrice(price, product.sale);
            priceElement.innerHTML = `
                <span class="price-current">${formatPrice(salePrice)}</span>
                <span class="price-original">${formatPrice(price)}</span>
            `;
        } else {
            priceElement.innerHTML = `<span class="price-current">${formatPrice(price)}</span>`;
        }

        stockElement.textContent = `В наличии: ${variant.stock} шт.`;

        // Обновляем доступность кнопки
        const addButton = document.getElementById('modalAddToCart');
        if (addButton) {
            addButton.disabled = variant.stock === 0;
            addButton.textContent = variant.stock === 0 ? 'Нет в наличии' : 'Добавить в корзину';
        }
    }
};

/**
 * Добавление выбранного варианта в корзину
 */
let addSelectedVariantToCart = () => {
    if (!state.productVariantsModal.product || !state.productVariantsModal.selectedVariant) return;

    const product = state.productVariantsModal.product;
    const variant = state.productVariantsModal.selectedVariant;

    if (variant.stock > 0) {
        addToCart(product.id, variant.id);
        closeProductVariantsModal();

        // Показываем уведомление об успешном добавлении
        showNotification(`${product.title} (${variant.name}) добавлен в корзину`);
    }
};

/**
 * Отображение модального окна с вариантами
 */
const renderProductVariantsModal = () => {
    const product = state.productVariantsModal.product;
    if (!product) return;

    // Удаляем существующее модальное окно, если есть
    const existingModal = document.getElementById('productVariantsModal');
    if (existingModal) {
        existingModal.remove();
    }

    const modalHTML = `
        <div class="modal-overlay" id="productVariantsModal">
            <div class="modal product-variants-modal">
                <div class="modal-header">
                    <h3>Выберите вариант</h3>
                    <button class="modal-close" onclick="closeProductVariantsModal()">✕</button>
                </div>
                <div class="modal-content">
                    <div class="product-info">
                        <div class="product-icon-large">${product.icon}</div>
                        <div class="product-details">
                            <h4 class="product-title">${product.title}</h4>
                            <div class="product-brand">${product.brand}</div>
                            <p class="product-description">${product.description}</p>
                            ${product.isNew ? '<span class="badge badge-new">Новинка</span>' : ''}
                            ${product.sale > 0 ? `<span class="badge badge-sale">-${product.sale}%</span>` : ''}
                        </div>
                    </div>
                    
                    <div class="variants-section">
                        <h5>Доступные варианты:</h5>
                        <div class="variants-grid">
                            ${product.variants.map(variant => `
                                <div class="variant-option ${variant.id === state.productVariantsModal.selectedVariant.id ? 'selected' : ''}" 
                                     data-variant-id="${variant.id}" 
                                     onclick="selectProductVariant('${variant.id}')">
                                    <div class="variant-name">${variant.name}</div>
                                    <div class="variant-price">${formatPrice(product.sale > 0 ? calculateSalePrice(variant.price, product.sale) : variant.price)}</div>
                                    <div class="variant-stock">В наличии: ${variant.stock}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <div class="selected-variant-info">
                            <div class="selected-price" id="modalPrice"></div>
                            <div class="selected-stock" id="modalStock"></div>
                        </div>
                        <button class="btn btn-primary" id="modalAddToCart" onclick="addSelectedVariantToCart()">
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Показываем модальное окно с анимацией
    setTimeout(() => {
        document.getElementById('productVariantsModal').classList.add('open');
    }, 10);

    // Обновляем информацию о выбранном варианте
    updateVariantSelection();

    // Добавляем обработчик клика вне модального окна
    document.getElementById('productVariantsModal').addEventListener('click', (e) => {
        if (e.target.id === 'productVariantsModal') {
            closeProductVariantsModal();
        }
    });
};

/**
 * Показ уведомления пользователю
 */
const showNotification = (message) => {
    // Удаляем существующее уведомление
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    // Показываем уведомление
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
};

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.handleProductClick = handleProductClick;
window.closeProductVariantsModal = closeProductVariantsModal;
window.selectProductVariant = selectProductVariant;
window.addSelectedVariantToCart = addSelectedVariantToCart;