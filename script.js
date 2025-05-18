const books = [
  { id: 1, title: "1984", author: "Джордж Орвелл", price: 200, discount: 0, genre: "Дистопія", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/2/6/26_1_329.jpg", alt: "Обкладинка книги 1984" },
  
  { id: 2, title: "Майстер і Маргарита", author: "Михайло Булгаков", price: 220, discount: 15, genre: "Фантастика", img: "https://upload.wikimedia.org/wikipedia/uk/e/e5/%D0%9C%D0%B0%D0%B9%D1%81%D1%82%D0%B5%D1%80_%D1%96_%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_-_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%BE%D0%B1%D0%BA%D0%BB%D0%B0%D0%B4%D0%B8%D0%BD%D0%BA%D0%B0.jpg", alt: "Обкладинка книги Майстер і Маргарита" },
  
  { id: 3, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Ролінґ", price: 300, discount: 0, genre: "Фентезі", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/4/1/41_1_131.jpg", alt: "Обкладинка книги Гаррі Поттер і філософський камінь" },
  
  { id: 4, title: "Керрі", author: "Стівен Кінг", price: 250, discount: 20, genre: "Хорор", img: "https://nashformat.ua/files/products/902645.270x390.jpg", alt: "Обкладинка книги Керрі" },
  
  { id: 5, title: "Фауст", author: "Йоганн Вольфганг фон Ґете", price: 180, discount: 5, genre: "Драма", img: "https://bookhouse.kg/media/galleryphoto/2023/4/42450442-32ef-4d42-ba55-bd431eb1ec0e.jpg.600x780_q94.jpg", alt: "Обкладинка книги Фауст" },
  
  { id: 6, title: "Убити пересмішника", author: "Гарпер Лі", price: 190, discount: 0, genre: "Драма", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/w/b/wbfmksgwaj4.jpg", alt: "Обкладинка книги Убити пересмішника" },
  
  { id: 7, title: "Великий Гетсбі", author: "Френсіс Скотт Фіцджеральд", price: 210, discount: 0, genre: "Роман", img: "https://bookclub.ua/images/db/goods/63507_127380.jpg", alt: "Обкладинка книги Великий Гетсбі" },
  
  { id: 8, title: "Маленький принц", author: "Антуан де Сент-Екзюпері", price: 150, discount: 0, genre: "Фантастика", img: "https://nukadeti.ru/content/images/static/tale400x400/5506_84.jpg", alt: "Обкладинка книги Маленький принц" },
  
  { id: 9, title: "Кохання під час холери", author: "Габріель Гарсія Маркес", price: 195, discount: 5, genre: "Роман", img: "https://static.yakaboo.ua/media/catalog/product/i/m/img_85918.jpg", alt: "Обкладинка книги Кохання під час холери" },
  
   { id: 10, title: "Сто років самотності", author: "Габріель Гарсія Маркес", price: 215, discount: 10, genre: "Роман", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/1/9/192_1_3.jpg", alt: "Обкладинка книги Сто років самотності" },
  
  { id: 11, title: "Чума", author: "Альбер Камю", price: 175, discount: 15, genre: "Філософська проза", img: "https://static.yakaboo.ua/media/catalog/product/7/1/714_1_1.jpg", alt: "Обкладинка книги Чума" },
  
  { id: 12, title: "Процес", author: "Франц Кафка", price: 185, discount: 0, genre: "Драма", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img778_61.jpg", alt: "Обкладинка книги Процес" },
  
  { id: 13, title: "Бійцівський клуб", author: "Чак Паланік", price: 190, discount: 0, genre: "Роман", img: "https://bookclub.ua/images/db/goods/62367_124444.jpg", alt: "Обкладинка книги Бійцівський клуб" },
  
  { id: 14, title: "Великі сподівання", author: "Чарльз Діккенс", price: 240, discount: 0, genre: "Роман", img: "https://vinkniga.com.ua/wp-content/uploads/2015/12/scaned_document-18-26-05.pdf-2.jpeg", alt: "Обкладинка книги Великі сподівання" },
  
  { id: 15, title: "Острів скарбів", author: "Роберт Льюїс Стівенсон", price: 170, discount: 20, genre: "Пригоди", img: "https://upload.wikimedia.org/wikipedia/uk/1/17/%D0%9E%D1%81%D1%82%D1%80%D1%96%D0%B2_%D1%81%D0%BA%D0%B0%D1%80%D0%B1%D1%96%D0%B2_%28%D0%A3%D1%80%D0%B1%D1%96%D0%BD%D0%BE%2C_2018%29.png", alt: "Обкладинка книги Острів скарбів" },
  
  { id: 16, title: "Мобі Дік", author: "Герман Мелвілл", price: 260, discount: 0, genre: "Пригоди", img: "https://vsiknygy.com.ua/image/catalog/upload/iblock/f5c/f5c9680ba14fd2f2ea25673cf1d868ce.jpg", alt: "Обкладинка книги Мобі Дік" },
  
  { id: 17, title: "Франкенштейн", author: "Мері Шеллі", price: 180, discount: 0, genre: "Готика", img: "https://bookchef.ua/upload/iblock/69a/69ad7f99e6946f53821e5f80433e9ab4.jpg", alt: "Обкладинка книги Франкенштейн" },
  
  { id: 18, title: "Дракула", author: "Брем Стокер", price: 185, discount: 15, genre: "Готика", img: "https://bookclub.ua/images/db/goods/61241_121432.jpg", alt: "Обкладинка книги Дракула" },
  
  { id: 19, title: "Шерлок Голмс", author: "Артур Конан Дойль", price: 230, discount: 0, genre: "Детектив", img: "https://bookclub.ua/images/db/goods/59558_118801.jpg", alt: "Обкладинка книги Шерлок Голмс" },
  
  { id: 20, title: "Дон Кіхот", author: "Мігель де Сервантес", price: 210, discount: 5, genre: "Роман", img: "https://readeat.com/storage/app/uploads/public/677/3ac/aa8/6773acaa8e615669241573.webp", alt: "Обкладинка книги Дон Кіхот" },
  
  { id: 21, title: "Портрет Доріана Ґрея", author: "Оскар Вайлд", price: 175, discount: 10, genre: "Готика", img: "https://static.yakaboo.ua/media/catalog/product/6/3/631_1_1.jpg", alt: "Обкладинка книги Портрет Доріана Ґрея" },
  
  { id: 22, title: "Улісс", author: "Джеймс Джойс", price: 240, discount: 0, genre: "Модернізм", img: "https://uabooks.net/posters/101.jpg", alt: "Обкладинка книги Улісс" },
  
  { id: 23, title: "Іліада", author: "Гомер", price: 190, discount: 0, genre: "Епічна поезія", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_49643.jpg", alt: "Обкладинка книги Іліада" },
  
  { id: 24, title: "Одіссея", author: "Гомер", price: 200, discount: 15, genre: "Епічна поезія", img: "https://litarchive.in.ua/wp-content/uploads/2024/01/Odisseia-Homer-min.jpg", alt: "Обкладинка книги Одіссея" },
  
  { id: 25, title: "Життя Пі", author: "Янн Мартель", price: 180, discount: 10, genre: "Пригоди", img: "https://upload.wikimedia.org/wikipedia/uk/4/49/Zuttia_pi.png", alt: "Обкладинка книги Життя Пі" },
  
  { id: 26, title: "Старий і море", author: "Ернест Хемінгуей", price: 165, discount: 5, genre: "Пригоди", img: "https://upload.wikimedia.org/wikipedia/uk/6/66/Staryy_i_more_00.png", alt: "Обкладинка книги Старий і море" },
  
  { id: 27, title: "451° за Фаренгейтом", author: "Рей Бредбері", price: 170, discount: 0, genre: "Наукова фантастика", img: "https://bookchef.ua/upload/iblock/178/178b08674b5836bc01ce123570bb753d.jpg", alt: "Обкладинка книги 451° за Фаренгейтом" },
  
  { id: 28, title: "Американський психопат", author: "Брет Істон Елліс", price: 180, discount: 0, genre: "Трилер", img: "https://bookclub.ua/images/db/goods/60556_120312.jpg", alt: "Обкладинка книги Американський психопат" },
  
  { id: 29, title: "Чарівник країни Оз", author: "Френк Баум", price: 160, discount: 15, genre: "Фентезі", img: "https://readeat.com/storage/app/uploads/public/681/c7b/686/thumb_241409_900_900_0_0_auto.png", alt: "Обкладинка книги Чарівник країни Оз" },
  
  { id: 30, title: "Апґрейд", author: "Блейк Крауч", price: 210, discount: 15, genre: "Наукова фантастика", img: "https://readeat.com/storage/app/uploads/public/67c/6fe/1ce/67c6fe1ce9ed9292249129.png", alt: "Обкладинка книги Апґрейд" },
  
  { id: 31, title: "Вогонь і кров", author: "Джордж Мартін", price: 290, discount: 0, genre: "Фентезі", img: "https://cdn.27.ua/799/40/7e/1130622_5.jpeg", alt: "Обкладинка книги Вогонь і кров" },
  
  { id: 32, title: "Гра престолів", author: "Джордж Мартін", price: 255, discount: 0, genre: "Фентезі", img: "https://vsiknygy.com.ua/image/catalog/upload/iblock/5fe/5febe60ff455f614e513a0341c4bc26d.png", alt: "Обкладинка книги Гра престолів" },
  
  { id: 33, title: "Битва королів", author: "Джордж Мартін", price: 260, discount: 5, genre: "Фентезі", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/9/7/9789669489982_bytvakoroliv_2.jpg", alt: "Обкладинка книги Битва королів" },
  
  { id: 34, title: "Буря мечів", author: "Джордж Мартін", price: 270, discount: 0, genre: "Фентезі", img: "https://bookclub.ua/images/db/goods/53278_97547.jpg", alt: "Обкладинка книги Буря мечів" },
  
  { id: 35, title: "Бенкет круків", author: "Джордж Мартін", price: 265, discount: 0, genre: "Фентезі", img: "https://static.yakaboo.ua/media/catalog/product/7/5/755631_1_original.jpg", alt: "Обкладинка книги Бенкет круків" },
  
  { id: 36, title: "Танок з драконів", author: "Джордж Мартін", price: 275, discount: 5, genre: "Фентезі", img: "https://pocketbook.ua/media/catalog/product/9/7/9786178144012_tanokdrakoniv_5.jpg", alt: "Обкладинка книги Танок з драконів" },
  
  { id: 37, title: "Алхімік", author: "Пауло Коельйо", price: 195, discount: 0, genre: "Філософська проза", img: "https://upload.wikimedia.org/wikipedia/uk/2/22/Alchemist.jpg", alt: "Обкладинка книги Алхімік" },
  
  { id: 38, title: "Дівчина у потягу", author: "Пола Гоукінз", price: 200, discount: 10, genre: "Трилер", img: "https://upload.wikimedia.org/wikipedia/uk/2/27/%D0%94%D1%96%D0%B2%D1%87%D0%B8%D0%BD%D0%B0_%D1%83_%D0%BF%D0%BE%D1%82%D1%8F%D0%B3%D1%83.jpg", alt: "Обкладинка книги Дівчина у потягу" },
  
  { id: 39, title: "Я - легенда", author: "Річард Метісон", price: 215, discount: 0, genre: "Наукова фантастика", img: "https://books.google.com.ua/books/publisher/content?id=jw0CEQAAQBAJ&hl=uk&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U0nzXYcx7yV1ui9i-AGaSV4hfs_WQ&w=1280", alt: "Обкладинка книги Я - легенда" },
  
  { id: 40, title: "Дюна", author: "Френк Герберт", price: 260, discount: 20, genre: "Наукова фантастика", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6C1E_oRieB_2rhoYU9zr72dJ8lxqFffbLw&s", alt: "Обкладинка книги Дюна" },
  
  { id: 41, title: "Там, де співають раки", author: "Делія Оуенс", price: 185, discount: 0, genre: "Драма", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/3/2/32a944112133f8a83e296fc1d2e64ca0.jpg", alt: "Обкладинка книги Там, де співають раки" },
  
  { id: 42, title: "Ми були брехунами", author: "Е. Локгарт", price: 180, discount: 10, genre: "Трилер", img: "https://static.yakaboo.ua/media/catalog/product/3/7/37691_56617_1.jpg", alt: "Обкладинка книги Ми були брехунами" },
  
  { id: 43, title: "Завтра, завтра і завтра", author: "Габріель Зевін", price: 190, discount: 5, genre: "Драма", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/1/3/13c51d5d4656048ff56262014d17d532.png", alt: "Обкладинка книги Завтра, завтра і завтра" },
  
  { id: 44, title: "Хірург", author: "Тесс Геррітсен", price: 225, discount: 0, genre: "Трилер", img: "https://books.google.com.ua/books/publisher/content?id=vvgnDQAAQBAJ&hl=uk&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3Ozhz2MRxNFZgs_FxlxNNfK-eiiQ&w=1280", alt: "Обкладинка книги Хірург" },
  
  { id: 45, title: "Нічний портьє", author: "Ірвін Шоу", price: 250, discount: 0, genre: "Драма", img: "https://bookclub.ua/images/db/goods/62225_124084.jpg", alt: "Обкладинка книги Нічний портьє" },
  
  { id: 46, title: "Сім смертей Евелін Гардкасл", author: "Стюарт Тертон", price: 215, discount: 0, genre: "Містика", img: "https://static.yakaboo.ua/media/catalog/product/i/m/img_81165.jpg", alt: "Обкладинка книги Сім смертей Евелін Гардкасл" },
  
  { id: 47, title: "Доктор Сон", author: "Стівен Кінг", price: 220, discount: 0, genre: "Хорор", img: "https://bookclub.ua/images/db/goods/59141_118378.jpg", alt: "Обкладинка книги Доктор Сон" },
  
  { id: 48, title: "Сяйво", author: "Стівен Кінг", price: 210, discount: 0, genre: "Хорор", img: "https://bookclub.ua/images/db/goods/k/59142_118361_k.jpg", alt: "Обкладинка книги Сяйво" },
  
  { id: 49, title: "Кладовище домашніх тварин", author: "Стівен Кінг", price: 240, discount: 0, genre: "Хорор", img: "https://bookclub.ua/images/db/goods/k/61103_121189_k.jpg", alt: "Обкладинка книги Кладовище домашніх тварин" },
  
  { id: 50, title: "11/22/63", author: "Стівен Кінг", price: 300, discount: 0, genre: "Наукова фантастика", img: "https://bookclub.ua/images/db/goods/56087_108879.jpg", alt: "Обкладинка книги 11/22/63" },
  
  { id: 51, title: "Під куполом", author: "Стівен Кінг", price: 250, discount: 0, genre: "Хорор", img: "https://bookclub.ua/images/db/goods/60670_120473.jpg", alt: "Обкладинка книги Під куполом" },
  
  { id: 52, title: "Темна матерія", author: "Блейк Крауч", price: 215, discount: 5, genre: "Наукова фантастика", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img222_68.jpg", alt: "Обкладинка книги Темна матерія" },
  
  { id: 53, title: "Гидота", author: "Ірвін Велш", price: 225, discount: 0, genre: "Трилер", img: "https://bookclub.ua/images/db/goods/63481_127302.jpg", alt: "Обкладинка книги Гидота" },
  
  { id: 54, title: "Гаррі Поттер і таємна кімната", author: "Джоан Ролінґ", price: 200, discount: 0, genre: "Фентезі", img: "https://static.yakaboo.ua/media/catalog/product/4/2/42_1_302.jpg", alt: "Обкладинка книги Гаррі Поттер і таємна кімната" },
  
  { id: 55, title: "Гаррі Поттер і в'язень Азкабану", author: "Джоан Ролінґ", price: 210, discount: 0, genre: "Фентезі", img: "https://sens.in.ua/content/images/38/320x480l50nn0/garri-potter-3-i-vyazen-azkabanu-48275233801255.jpeg", alt: "Обкладинка книги Гаррі Поттер і в'язень Азкабану" },
  
  { id: 56, title: "Гаррі Поттер і келих вогню", author: "Джоан Ролінґ", price: 220, discount: 5, genre: "Фентезі", img: "https://upload.wikimedia.org/wikipedia/uk/a/a2/HPand_the_Goblet_of_Fire_UKR.jpg", alt: "Обкладинка книги Гаррі Поттер і келих вогню" },
  
  { id: 57, title: "Гаррі Поттер і Орден Фенікса", author: "Джоан Ролінґ", price: 230, discount: 10, genre: "Фентезі", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/1/3/130_1_2.jpg", alt: "Обкладинка книги Гаррі Поттер і Орден Фенікса" },
  
  { id: 58, title: "Гаррі Поттер і Напівкровний Принц", author: "Джоан Ролінґ", price: 235, discount: 0, genre: "Фентезі", img: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/1/3/131_1_16.jpg", alt: "Обкладинка книги Гаррі Поттер і Напівкровний Принц" },
  
  { id: 59, title: "Гаррі Поттер і смертельні реліквії", author: "Джоан Ролінґ", price: 240, discount: 0, genre: "Фентезі", img: "https://upload.wikimedia.org/wikipedia/uk/f/fd/HP_and_the_Deathly_Hallows_UKR.jpg", alt: "Обкладинка книги Гаррі Поттер і смертельні реліквії" },
  
  { id: 60, title: "Кривавий меридіан", author: "Кормак Маккарті", price: 225, discount: 0, genre: "Роман", img: "https://uabooks.co.ua/wp-content/uploads/2024/09/krivavij-meridian-abo-vechirnya-zagrava-na-zahodi.jpg", alt: "Обкладинка книги Кривавий меридіан" },

  {id: 61, title: "Кобзар", author: "Тарас Шевченко", price : 235, discount: 10, genre:"Оповідання ", img:"https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_12076.jpg"},

  {id: 62, title: "Чотири сезони", author: "Стівен Кінг", price : 300, discount: 5, genre:"Оповідання ", img:"https://bookclub.ua/images/db/goods/55089_103969.jpg"},

  {id: 63, title: "Заради майбутьного", author: "Макс Кідрук", price : 200, discount: 0, genre:"Оповідання ", img:"https://nashformat.ua/files/products/ebook-zarady-majbutnogo-621581.330x300.jpeg"},

  {id: 64, title: "Пуаро веде слідство", author: "Агата Крісті", price : 200, discount: 10, genre:"Оповідання ", img:"https://bookclub.ua/images/db/goods/52555_94088.jpg"},

  {id: 65, title: "Пастка для різника", author: "Юрій Даценко", price : 200, discount: 15, genre:"Детектив", img:"https://bookclub.ua/images/db/goods/61696_122774.jpg"},

  {id: 66, title: "Код да Вінчі", author: "Ден Браун", price : 300, discount: 0, genre:"Трилер", img:"https://upload.wikimedia.org/wikipedia/uk/7/72/Da_vinci_code.jpg"}
];

let cart = [];

const booksGrid = document.getElementById('books-grid');
const discountBooksGrid = document.getElementById('discount-books-grid');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const searchToggle = document.getElementById('search-toggle');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const cartToggle = document.getElementById('cart-toggle');
const homeSection = document.getElementById('home-section');
const catalogSection = document.getElementById('catalog-section');
const cartSection = document.getElementById('cart-section');
const navHome = document.getElementById('nav-home');
const navCatalog = document.getElementById('nav-catalog');

function discountedPrice(price, discount) {
    return Math.round(price * (1 - discount / 100));
}

function renderBooks(filter = '') {
    booksGrid.innerHTML = '';
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(filter.toLowerCase()) || 
        book.author.toLowerCase().includes(filter.toLowerCase())
    );
    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = '<p class="book-not-found">Книги не знайдені</p>';
        return;
    }
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        let priceHTML = `<p class="book-price">₴${book.price}</p>`;
        if (book.discount && book.discount == 0) {
            const newPrice = discountedPrice(book.price, book.discount);
            priceHTML = `
                <p class="price-old">₴${book.price}</p>
                <p class="price-new">₴${newPrice}</p>
                <div class="discount-badge">-${book.discount}%</div>
            `;
        }
        bookCard.innerHTML = `
            <img src="${book.img}" alt="${book.alt}" class="book-img" width="200" height="300"/>
            <h4 class="book-title">${book.title}</h4>
            <p class="book-author">Автор: ${book.author}</p>
            ${priceHTML}
            <button class="btn-buy add-to-cart-btn" data-id="${book.id}">Купити</button>
        `;
        booksGrid.appendChild(bookCard);
    });
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'));
            addToCart(id);
        });
    });
}

function renderBooks(filter = '') {
    booksGrid.innerHTML = '';
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(filter.toLowerCase()) || 
        book.author.toLowerCase().includes(filter.toLowerCase())
    );
    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = '<p class="book-not-found">Книги не знайдені</p>';
        return;
    }
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        let priceHTML = `<p class="book-price">₴${book.price}</p>`;
        if (book.discount && book.discount > 0) {
            const newPrice = discountedPrice(book.price, book.discount);
            priceHTML = `
                <div class="price-container">
                    <p class="price-old">₴${book.price}</p>
                    <p class="price-new">₴${newPrice}</p>
                    <div class="discount-badge">-${book.discount}%</div>
                </div>
            `;
        }
        bookCard.innerHTML = `
            <img src="${book.img}" alt="${book.alt}" class="book-img" width="200" height="300"/>
            <h4 class="book-title">${book.title}</h4>
            <p class="book-author">Автор: ${book.author}</p>
            ${priceHTML}
            <button class="btn-buy add-to-cart-btn" data-id="${book.id}">Купити</button>
        `;
        booksGrid.appendChild(bookCard);
    });
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'));
            addToCart(id);
        });
    });
}

function renderDiscountBooks() {
    discountBooksGrid.innerHTML = '';
    const discountBooks = books.filter(book => book.discount && book.discount > 0);
    if (discountBooks.length === 0) {
        discountBooksGrid.innerHTML = '<p class="book-not-found">Немає книжок зі знижкою</p>';
        return;
    }
    discountBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        const newPrice = discountedPrice(book.price, book.discount);
        bookCard.innerHTML = `
            <img src="${book.img}" alt="${book.alt}" class="book-img" width="200" height="300"/>
            <h4 class="book-title">${book.title}</h4>
            <p class="book-author">Автор: ${book.author}</p>
            <div class="price-container">
                <p class="price-old">₴${book.price}</p>
                <p class="price-new">₴${newPrice}</p>
                <div class="discount-badge">-${book.discount}%</div>
            </div>
            <button class="btn-buy add-to-cart-btn" data-id="${book.id}">Купити</button>
        `;
        discountBooksGrid.appendChild(bookCard);
    });
    document.querySelectorAll('#discount-books-grid .add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'));
            addToCart(id);
        });
    });
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    if (totalCount === 0) {
        cartCount.classList.add('hidden');
    } else {
        cartCount.classList.remove('hidden');
    }

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="book-not-found">Кошик порожній</p>';
        checkoutBtn.disabled = true;
        cartTotal.textContent = 'Всього: ₴0';
        return;
    }
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        const pricePerItem = item.book.discount && item.book.discount > 0 ? discountedPrice(item.book.price, item.book.discount) : item.book.price;
div.innerHTML = `
    <div class="cart-item-left">
        <div>
            <h4 class="cart-title">${item.book.title}</h4>
            <p class="cart-author">Автор: ${item.book.author}</p>
            <p class="cart-price">₴${pricePerItem} x ${item.quantity} = ₴${pricePerItem * item.quantity}</p>
        </div>
    </div>
    <div class="cart-controls">
        <button class="btn-small decrease-btn" data-id="${item.book.id}">-</button>
        <button class="btn-small increase-btn" data-id="${item.book.id}">+</button>
        <button class="btn-small btn-remove remove-btn" data-id="${item.book.id}"><i class="fas fa-trash-alt"></i></button>
    </div>
            <div class="cart-controls">
                <button class="btn-small decrease-btn" data-id="${item.book.id}">-</button>
                <button class="btn-small increase-btn" data-id="${item.book.id}">+</button>
                <button class="btn-small btn-remove remove-btn" data-id="${item.book.id}"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });
    checkoutBtn.disabled = false;
    const totalPrice = cart.reduce((sum, item) => {
        const pricePerItem = item.book.discount && item.book.discount > 0 ? discountedPrice(item.book.price, item.book.discount) : item.book.price;
        return sum + pricePerItem * item.quantity;
    }, 0);
    cartTotal.textContent = `Всього: ₴${totalPrice}`;

  document.querySelectorAll('.cart img').forEach(img => img.style.display = 'none');

  
    document.querySelectorAll('.increase-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            changeQuantity(id, 1);
        });
    });
    document.querySelectorAll('.decrease-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            changeQuantity(id, -1);
        });
    });
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}


function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    const cartItem = cart.find(item => item.book.id === bookId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ book, quantity: 1 });
    }

    const cardEl = document.querySelector(`.add-to-cart-btn[data-id="${bookId}"]`)?.closest('.book-card');
    if (cardEl) {
        cardEl.classList.add('cart-flash');
        setTimeout(() => cardEl.classList.remove('cart-flash'), 400);
    }

    updateCartUI();
}

function updateCartUI() {
    // Оновити лічильник
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    if (totalCount === 0) {
        cartCount.classList.add('hidden');
    } else {
        cartCount.classList.remove('hidden');
    }


    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-blue-200">Кошик порожній</p>';
        checkoutBtn.disabled = true;
        cartTotal.textContent = 'Всього: ₴0';
        return;
    }
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between bg-blue-700 rounded p-3';

        const pricePerItem = item.book.discount && item.book.discount > 0 ? discountedPrice(item.book.price, item.book.discount) : item.book.price;
        div.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${item.book.img}" alt="${item.book.alt}" class="w-16 h-24 object-cover rounded"/>
                <div>
                    <h4 class="font-semibold text-blue-300">${item.book.title}</h4>
                    <p class="text-blue-400 text-sm">Автор: ${item.book.author}</p>
                    <p class="text-blue-200 font-bold">₴${pricePerItem} x ${item.quantity} = ₴${pricePerItem * item.quantity}</p>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <button class="bg-blue-600 hover:bg-blue-700 px-2 rounded text-blue-100 font-bold decrease-btn" data-id="${item.book.id}">-</button>
                <button class="bg-blue-600 hover:bg-blue-700 px-2 rounded text-blue-100 font-bold increase-btn" data-id="${item.book.id}">+</button>
                <button class="bg-red-600 hover:bg-red-700 px-2 rounded text-yellow-100 font-bold remove-btn" data-id="${item.book.id}"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });
    checkoutBtn.disabled = false;
    const totalPrice = cart.reduce((sum, item) => {
        const pricePerItem = item.book.discount && item.book.discount > 0 ? discountedPrice(item.book.price, item.book.discount) : item.book.price;
        return sum + pricePerItem * item.quantity;
    }, 0);
    cartTotal.textContent = `Всього: ₴${totalPrice}`;

    document.querySelectorAll('.increase-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            changeQuantity(id, 1);
        });
    });
    document.querySelectorAll('.decrease-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            changeQuantity(id, -1);
        });
    });
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

function changeQuantity(bookId, delta) {
    const item = cart.find(i => i.book.id === bookId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity < 1) {
        removeFromCart(bookId);
    } else {
        updateCartUI();
    }
}

function removeFromCart(bookId) {
    cart = cart.filter(i => i.book.id !== bookId);
    updateCartUI();
}

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    alert('Дякуємо за замовлення! Ми з вами зв\'яжемося найближчим часом.');
    cart = [];
    updateCartUI();
    showSection('home');
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    renderBooks(query);
    showSection('catalog');
});

searchToggle.addEventListener('click', () => {
    if (searchBar.classList.contains('hidden')) {
        searchBar.classList.remove('hidden');
        searchInput.focus();
    } else {
        searchBar.classList.add('hidden');
        searchInput.value = '';
        renderBooks();
    }
});

cartToggle.addEventListener('click', () => {
    showSection('cart');
    searchBar.classList.add('hidden');
});

navHome.addEventListener('click', () => {
    showSection('home');
    searchBar.classList.add('hidden');
    searchInput.value = '';
});
navCatalog.addEventListener('click', () => {
    showSection('catalog');
    searchBar.classList.add('hidden');
    searchInput.value = '';
    renderBooks();
});

function showSection(section) {
    homeSection.classList.add('hidden');
    catalogSection.classList.add('hidden');
    cartSection.classList.add('hidden');
    if (section === 'home') {
        homeSection.classList.remove('hidden');
    } else if (section === 'catalog') {
        catalogSection.classList.remove('hidden');
    } else if (section === 'cart') {
        cartSection.classList.remove('hidden');
    }
}

renderBooks();
renderDiscountBooks();
updateCartUI();
showSection('home');


