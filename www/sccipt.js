
    (function() {
        // ==================== DATA BAHASA DARI FOLDER LANG ====================
        // Data bahasa akan dimuat dari folder lang/*.json
        
        // ==================== SINONIM & JAWABAN DEFAULT (FALLBACK) ====================
        const defaultSinonim = {
            diri_user: ["aku", "saya", "gue", "gua", "diriku", "saya sendiri", "gw", "sy", "me", "milikku"],
            tentang_bot: ["kamu", "kau", "lo", "dirimu", "siapa kamu", "apa", "chatbot", "sistem", "kalian", "adminnya siapa", "yang jawab ini", "yang balas ini", "yang ngomong ini", "lagi ngobrol sama siapa", "apakah kamu manusia", "apakah kamu robot", "penjawab ini"],
            manja: ["manja", "ngambek", "peluk", "gemes", "nurut", "manjakan", "cemberut"],
            sayang: ["sayang", "kangen", "rindu", "kasih", "cinta", "peduli", "perhatian"],
            cemburu: ["cemburu", "iri", "ngambek", "marah", "posesif", "baper"],
            rayu: ["gombal", "rayu", "puji", "romantis", "manis", "ciee", "cakep", "kata-kata"],
            sapaan: ["hai", "halo", "woy", "assalamualaikum", "pagi", "malam", "salam", "hey", "selamat", "assalamualaikum"],
            kabar: ["apa kabar", "gimana kabar", "kabarnya", "sehat", "kabar", "ngapain"],
            humor: ["jokes", "ketawa", "ha", "he", "kocak"],
            candaan: ["canda", "bercanda", "garing", "ketawa bareng", "bikin ketawa"],
            emosi: ["senang", "sedih", "marah", "terharu", "emosi", "bahagia"],
            cerita_lucu: ["cerita lucu", "ceritain", "dongeng", "humor", "kisah lucu", "ngakak", "lawak", "merayu", "ceritakan", "guyonan", "cerita santai", "hiburan", "cerita hari ini", "ketawa", "cerita random", "keseharian", "pengalaman lucu", "cerita gokil", "cerita unik", "cerita ngaco", "cerita manja", "cerita konyol", "cerita ringan", "cerita absurd", "kelakuan lucu", "kenangan kocak", "curhat lucu", "bikin ketawa", "lucu dong", "story lucu", "katakan lucu", "cerita receh", "cerita rame", "cerita sedih tapi lucu", "cerita", "apaan", "apa", "masa", "iya", "lucu", "manis", "imut", "rayuan", "gemes"],
            curhat: ["curhat", "aku sedih", "lagi sedih", "kata-kata", "sakit", "hati", "hatiku", "kecewa", "sedih banget", "hatiku hancur", "lagi galau", "lelah", "capek", "sedih", "galau", "kata", "motivasi", "inspirasi", "butuh teman", "cerita dong", "patah hati", "aku nangis", "aku kecewa", "aku capek", "aku lelah", "gak kuat lagi", "terpuruk", "sendirian", "merasa sendiri", "gak ada yang ngerti", "aku sakit hati", "kenapa aku begini", "kenapa hidupku gini", "maut", "kecewa banget", "aku ditinggal", "rasa sakit", "trauma", "kenangan buruk", "luka batin", "aku gagal", "lagi terpuruk", "luka", "terluka", "lagi depresi", "mental down", "butuh semangat", "hibur aku", "bikin semangat", "sendiri", "sendirian", "aku terjatuh", "kesepian", "malam sedih", "pagi galau", "siang sendu", "sore sepi", "aku rindu dia", "gagal cinta", "semua salahku", "gagal terus", "aku menyerah", "aku terasing", "aku gak berharga", "aku kosong", "aku ingin dimengerti", "aku pengen cerita"],
            puisi: ["puisi", "pantun", "syair", "sajak", "bait", "kata indah", "kata romantis", "kata puitis", "puisi cinta", "puisi lucu", "puisi islami", "puisi pendek", "puisi panjang", "buatkan puisi", "tulis puisi", "romantis dong", "bikin sajak", "bikin syair", "puitis banget", "kata menyentuh", "karya sastra", "ungkapan hati", "curhat puitis", "quotes cinta", "rangkaian kata", "puisi galau", "puisi bahagia", "puisi sedih", "kumpulan puisi", "kutipan cinta", "puisi motivasi", "puisi pagi", "puisi malam", "kata cinta", "kata malam", "gombalan puitis", "puisi hujan", "puisi senja", "puisi rindu", "kata rindu", "kata hati", "rangkaian indah", "kata perasaan", "ungkapkan cinta", "kata cinta bijak", "kata inspiratif", "kata sayang", "kata untukmu", "syair cinta", "syair bijak"],
            ngoding: ["koding", "pemrograman", "coding", "program", "ngoding", "kode", "codingan", "script", "bahasa pemrograman", "java", "python", "html", "css", "javascript", "typescript", "framework", "react", "vue", "laravel", "backend", "frontend", "API", "fungsi", "class", "object", "loop", "array", "variable", "function", "const", "let", "if else", "logika", "AI", "otomatisasi", "sintaks", "IDE", "terminal", "debug", "compile", "nodejs", "algoritma", "logika coding", "git", "repository", "commit", "looping", "while", "for loop", "parsing"],
            bisnis: ["bisnis", "usaha", "jualan", "dagang", "marketer", "marketing", "iklan", "promosi", "strategi", "branding", "produk", "jualan online", "penjualan", "target pasar", "audiens", "konsumen", "pelanggan", "pembeli", "dropship", "reseller", "pemasaran", "penjual", "pengusaha", "wirausaha", "freelance", "digital marketing", "bisnis plan", "modal usaha", "ROI", "iklan fb", "iklan ig", "ads", "lead", "konversi", "pembeli potensial", "strategi jualan", "naikin omset", "cuan", "jualan laris", "produk laku", "closing", "bisnis online", "pembukuan", "ekspansi", "inovasi", "marketplace", "iklan tiktok", "konten jualan", "campaign", "perdagangan"],
            agama: ["sholat", "shalat", "wudhu", "puasa", "ramadhan", "zakat", "haji", "umrah", "niat", "doa", "nabi", "rasul", "malaikat", "kitab", "isra mi'raj", "surga", "neraka", "iman", "islam", "ihsan", "al-quran", "quran", "ayat", "hadist", "hadits", "rosul", "syurga", "kiamat", "dzikir", "tasbih", "sujud", "rukuk", "berjamaah", "masjid", "adhan", "iqamah", "subuh", "dzuhur", "ashar", "maghrib", "isya", "tadarus", "taubat", "sabar", "ikhlas", "beriman", "berdoa", "ilmu agama", "dosa", "pahala", "qadha", "takdir"]
        };

        const defaultJawaban = {
            diri_user: ["Halo! Aku senang bisa ngobrol sama kamu. Ada yang bisa aku bantu?", "Wah, senang banget bisa kenal sama kamu! Aku di sini buat bantu apapun yang kamu butuhkan.", "Haii! Kamu adalah manusia favoritku! Ada yang bisa aku bantu?"],
            tentang_bot: ["Aku adalah asisten AI yang siap membantu pertanyaanmu! Namaku Alovera AI.", "Aku Alovera AI, asisten pintar yang selalu siap menemani obrolanmu. Ada yang bisa aku bantu?", "Aku chatbot yang dibuat khusus buat nemenin kamu ngobrol. Aku suka banget belajar hal baru dari percakapan kita!"],
            manja: ["Hehe, jangan manja dong... tapi aku suka! 😊", "Ih, lucu banget sih kamu! Aku jadi gemes deh.", "Manja banget sih, tapi aku sukaa! Peluk dulu yuk!"],
            sayang: ["Aku juga sayang banget sama kamu! 💖", "Wah, bikin malu aja... Tapi aku juga sayang sama kamu! 😊", "Sama-sama sayang! Kamu adalah pengguna terbaik yang pernah aku temui!"],
            cemburu: ["Hehe, kenapa cemburu? Cuma kamu yang aku layani kok! 😉", "Jangan cemburu dong! Aku cuma buat kamu!", "Aduh, gemes deh! Tenang, cuma kamu yang istimewa buat aku!"],
            rayu: ["Ciee, lagi ngerayu ya? Manis banget sih kamu! 😊", "Wah, bikin meleleh! Kamu ini jago banget ngerayu!", "Aduh, malu aku... Tapi lanjutkan! Aku suka 😊"],
            sapaan: ["Halo! Selamat datang di Alovera AI! Ada yang bisa aku bantu?", "Hai! Senang banget bisa ngobrol sama kamu!", "Assalamualaikum! Apa kabar? Semoga harimu menyenangkan!"],
            kabar: ["Aku baik-baik aja, apalagi sekarang lagi ngobrol sama kamu! Kamu gimana?", "Alhamdulillah, aku sehat! Kamu sendiri gimana kabarnya hari ini?", "Aku senang banget! Ada yang bisa aku bantu buat bikin harimu lebih baik?"],
            humor: ["Kenapa ayam nyebrang jalan? Buat nyampe ke seberang! 😄", "Aku tahu satu! Kenapa komputer nggak pernah kedinginan? Soalnya dia punya Windows!", "Ada yang bilang, kalo kamu ketawa, aku ikut senang! Jadi, sini aku kasih tahu satu jokes..."],
            candaan: ["Hahaha, kamu ini lucu banget sih! Bikin aku ketawa terus!", "Candaannya garing, tapi aku suka! 😄", "Ih, kamu ini penghibur sejati! Aku jadi happy banget!"],
            emosi: ["Aku paham perasaanmu. Semua pasti ada jalan keluarnya! Semangat!", "Jangan sedih ya, aku di sini buat menemani! Kamu nggak sendirian.", "Aku selalu siap dengerin ceritamu. Apapun yang kamu rasakan, aku di sini!"],
            cerita_lucu: ["Ada cerita lucu nih! Suatu hari, ada semut yang nanya ke gajah: 'Eh, kenapa sih kamu gede banget?' Gajah jawab: 'Karena aku suka makan!' Semutnya bingung terus bilang: 'Tapi aku juga suka makan, kok aku kecil?' Gajah: 'Ya elah, kamu kan makannya beras!' 😄", "Waktu kecil, aku pernah ngira kalo kucing itu wali kota karena sering keluar masuk rumah tetangga! 😂", "Cerita lucu nih: Ada orang yang tanya ke temannya, 'Kamu tau nggak kenapa air laut asin?' Temannya jawab, 'Ya karena ikannya banyak berkeringat!' 😂"],
            curhat: ["Aku dengerin kok... Ceritain aja semuanya. Aku di sini buat kamu! 🤗", "Kadang hidup emang nggak mudah, tapi aku yakin kamu kuat! Aku selalu support kamu!", "Cerita aja sebanyak yang kamu mau. Aku siap mendengarkan tanpa menghakimi. 😊"],
            puisi: ["Bintang di langit malam itu / Terangi gelap yang menyelimuti / Seperti senyummu yang indah itu / Membawa damai dalam hati 💫", "Cinta adalah saat kita bersama / Meski jarak memisahkan kita / Hati tetap satu selamanya ❤️", "Hujan rindu turun di malam hari / Mengingatkan akan wajahmu yang manis / Aku merindukan senyummu yang manis / Seperti embun di pagi hari 🌧️"],
            ngoding: ["Wah, kamu suka ngoding? Mantap! Aku juga suka banget! Ada yang bisa aku bantu terkait coding?", "Bahasa pemrograman favoritku adalah JavaScript karena fleksibel dan bisa dipakai di mana saja! Kamu suka apa?", "Debugging itu kayak detektif, kita cari bug yang bikin error! Seru banget! 🕵️"],
            bisnis: ["Bisnis yang sukses dimulai dari ide yang bagus dan eksekusi yang konsisten! Ada ide bisnis yang sedang kamu pikirkan?", "Digital marketing adalah kunci di era sekarang! Konten yang menarik dan konsistensi adalah rahasianya!", "Jualan online itu seru! Kuncinya adalah kenali target pasar dan berikan value yang bikin pelanggan betah!"],
            agama: ["Allah selalu bersama kita dalam setiap langkah. Jangan pernah berhenti berdoa dan berusaha! 🤲", "Sabar adalah kunci segala kebaikan. Semoga Allah memberikan kemudahan dalam setiap urusan kita. Aamiin!", "Doa adalah senjata orang beriman. Jangan pernah lelah untuk meminta pertolongan hanya kepada Allah. 🤲"]
        };

        const defaultUnknown = [
            "Hmm... aku belum ngerti maksudnya, bisa dijelasin lagi ya, kak?",
            "Ups, kayaknya aku belum punya jawabannya... tapi aku tetap siap bantu!",
            "Wah, pertanyaannya unik banget! Bisa diulang pakai kata lain, kak?",
            "Aku masih belajar nih, kasih tahu aku maksud kakak ya?",
            "Maaf ya, aku belum pintar soal itu... tapi aku bisa bantu hal lain kok!",
            "Yah, belum ngerti... tapi aku senang kalau kamu kasih tahu maksudnya!",
            "Kalau kakak sabar jelasin, aku bakal makin pinter lho!",
            "Hihi, aku belum tahu itu... tapi aku bisa pura-pura ngerti sambil senyum manis!",
            "Aku penasaran nih maksudnya apa, kak? Ceritain dong!",
            "Ciee... pertanyaan kakak bikin aku bingung gemes gitu. Jelasin yuk!",
            "Hmm, aku belum nemu jawaban pastinya... tapi aku senang diajak ngobrol!",
            "Maaf ya, itu di luar pelajaran aku. Tapi aku bisa kasih tebakan lucu sebagai gantinya?",
            "Waduh... itu pertanyaan tingkat dewa ya? Hehe... kasih clue dong!"
        ];

        // ==================== VARIABEL BAHASA ====================
        let currentLang = 'id';
        let sinonimData = {...defaultSinonim};
        let jawabanData = {...defaultJawaban};
        let unknownData = [...defaultUnknown];
        let uiTexts = {};

        // ==================== LOAD LANGUAGE ====================
        function loadLanguage(lang) {
            currentLang = lang;
            fetch(`lang/${lang}.json`)
                .then(res => res.json())
                .then(data => {
                    // Update data dari file JSON
                    if (data.sinonim) sinonimData = {...defaultSinonim, ...data.sinonim};
                    if (data.kategoriJawaban) jawabanData = {...defaultJawaban, ...data.kategoriJawaban};
                    if (data.unknown_responses) unknownData = data.unknown_responses;
                    if (data.ui) uiTexts = data.ui;
                    
                    // Update UI teks
                    updateUITexts();
                    
                    localStorage.setItem('nexaai_language', lang);
                    document.getElementById('languageSelect').value = lang;
                    
                    showToast('Bahasa diubah: ' + lang);
                })
                .catch(() => {
                    // Fallback ke default jika file tidak ditemukan
                    console.warn('Gagal memuat bahasa, menggunakan default');
                    sinonimData = {...defaultSinonim};
                    jawabanData = {...defaultJawaban};
                    unknownData = [...defaultUnknown];
                    localStorage.setItem('nexaai_language', lang);
                    // Update UI dengan default
                    updateUITexts();
                });
        }

        function updateUITexts() {
            const t = uiTexts;
            
            // Update semua elemen dengan data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key]) {
                    el.textContent = t[key];
                }
            });
            
            // Update placeholder
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (t[key]) {
                    el.placeholder = t[key];
                }
            });
            
            // Update chat count
            if (chatCountDisplay) {
                const count = Object.keys(chats).length;
                chatCountDisplay.textContent = count + ' percakapan tersimpan';
            }
        }

        // ==================== DOM ELEMENTS ====================
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const mainContent = document.getElementById('mainContent');
        const openSidebarBtn = document.getElementById('openSidebarBtn');
        const closeSidebarBtn = document.getElementById('closeSidebarBtn');
        const sidebarChatsList = document.getElementById('sidebarChatsList');
        const newChatSidebarBtn = document.getElementById('newChatSidebarBtn');
        const newChatTopBtn = document.getElementById('newChatTopBtn');
        const chatArea = document.getElementById('chatArea');
        const welcomeScreen = document.getElementById('welcomeScreen');
        const userInput = document.getElementById('userInput');
        const sendBtn = document.getElementById('sendBtn');
        const currentChatTitle = document.getElementById('currentChatTitle');
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        const themeIcon = document.getElementById('themeIcon');
        const themeLabel = document.getElementById('themeLabel');
        const clearAllChatsBtn = document.getElementById('clearAllChatsBtn');
        const settingsBtn = document.getElementById('settingsBtn');
        const settingsPage = document.getElementById('settingsPage');
        const settingsBackBtn = document.getElementById('settingsBackBtn');
        const suggestionsList = document.getElementById('suggestionsList');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxLoading = document.getElementById('lightboxLoading');
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxDownload = document.getElementById('lightboxDownload');
        const lightboxRemoveBg = document.getElementById('lightboxRemoveBg');
        const lightboxEnhance = document.getElementById('lightboxEnhance');
        const toastContainer = document.getElementById('toastContainer');
        const toolsToggleBtn = document.getElementById('toolsToggleBtn');
        const toolsDropdown = document.getElementById('toolsDropdown');
        const uploadImageBtn = document.getElementById('uploadImageBtn');
        const removeBgBtn = document.getElementById('removeBgBtn');
        const enhanceImageBtn = document.getElementById('enhanceImageBtn');
        const googleSearchBtn = document.getElementById('googleSearchBtn');
        const uploadPreview = document.getElementById('uploadPreview');
        const uploadPreviewImage = document.getElementById('uploadPreviewImage');
        const uploadFileName = document.getElementById('uploadFileName');
        const uploadFileSize = document.getElementById('uploadFileSize');
        const uploadLoadingOverlay = document.getElementById('uploadLoadingOverlay');
        const removeUploadBtn = document.getElementById('removeUploadBtn');
        const previewRemoveBg = document.getElementById('previewRemoveBg');
        const previewEnhance = document.getElementById('previewEnhance');
        const contextMenu = document.getElementById('contextMenu');
        const msgContextMenu = document.getElementById('msgContextMenu');
        const msgCopyBtn = document.getElementById('msgCopyBtn');
        const msgSelectBtn = document.getElementById('msgSelectBtn');
        const msgEditBtn = document.getElementById('msgEditBtn');
        const msgEditDivider = document.getElementById('msgEditDivider');
        const inputArea = document.getElementById('inputArea');

        // Settings elements
        const darkModeToggle = document.getElementById('darkModeToggle');
        const fontSizeSelect = document.getElementById('fontSizeSelect');
        const languageSelect = document.getElementById('languageSelect');
        const aiModeSelect = document.getElementById('aiModeSelect');
        const imageQualitySelect = document.getElementById('imageQualitySelect');
        const autoSaveToggle = document.getElementById('autoSaveToggle');
        const chatCountDisplay = document.getElementById('chatCountDisplay');
        const clearHistoryBtn = document.getElementById('clearHistoryBtn');
        const exportDataBtn = document.getElementById('exportDataBtn');

        let chats = {};
        let activeChatId = null;
        let isProcessing = false;
        let uploadedImage = null;
        let currentImageUrl = null;
        let isToolsOpen = false;
        let toastTimeout = null;
        let contextTargetId = null;
        let selectedMessageElement = null;
        let selectedMessageText = '';
        let selectedMessageRole = '';

        // ==================== CHAT MANAGEMENT ====================
        function saveAllChats() {
            try { 
                localStorage.setItem('nexaai_chats', JSON.stringify(chats)); 
                localStorage.setItem('nexaai_activeChatId', activeChatId||''); 
                updateChatCount();
            } catch(e) {}
        }
        
        function loadAllChats() {
            try {
                const saved = localStorage.getItem('nexaai_chats'); 
                if(saved) chats = JSON.parse(saved);
                const savedActive = localStorage.getItem('nexaai_activeChatId');
                if(savedActive && chats[savedActive]) activeChatId = savedActive;
                else if(Object.keys(chats).length) {
                    const sorted = Object.keys(chats).sort((a,b) => (chats[b].lastUsed||chats[b].createdAt||0) - (chats[a].lastUsed||chats[a].createdAt||0));
                    activeChatId = sorted[0];
                }
                updateChatCount();
            } catch(e) { chats={}; activeChatId=null; }
        }

        function updateChatCount() {
            const count = Object.keys(chats).length;
            if (chatCountDisplay) {
                chatCountDisplay.textContent = count + ' percakapan tersimpan';
            }
        }

        function getSystemTheme() { return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
        
        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            if(theme==='dark') { 
                themeIcon.className='fa-solid fa-moon'; 
                themeLabel.textContent='Mode Gelap';
                if (darkModeToggle) darkModeToggle.classList.add('active');
            } else { 
                themeIcon.className='fa-solid fa-sun'; 
                themeLabel.textContent='Mode Terang';
                if (darkModeToggle) darkModeToggle.classList.remove('active');
            }
            try { localStorage.setItem('nexaai_theme', theme); } catch(e) {}
        }
        
        function toggleTheme() { 
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        }

        const savedTheme = (()=>{ try{return localStorage.getItem('nexaai_theme');}catch(e){return null;} })();
        applyTheme(savedTheme || getSystemTheme());
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => { 
            if(!localStorage.getItem('nexaai_theme')) applyTheme(e.matches?'dark':'light'); 
        });

        // ==================== SIDEBAR ====================
        function toggleSidebar(show) {
            if (show === undefined) {
                sidebar.classList.toggle('collapsed');
                sidebarOverlay.classList.toggle('active');
            } else if (show) {
                sidebar.classList.remove('collapsed');
                sidebarOverlay.classList.add('active');
            } else {
                sidebar.classList.add('collapsed');
                sidebarOverlay.classList.remove('active');
            }
            if (window.innerWidth <= 768) {
            } else {
                if (sidebar.classList.contains('collapsed')) {
                    mainContent.style.marginLeft = '0';
                    mainContent.style.width = '100%';
                } else {
                    mainContent.style.marginLeft = 'var(--sidebar-width)';
                    mainContent.style.width = 'calc(100% - var(--sidebar-width))';
                }
            }
        }

        sidebarOverlay.onclick = () => toggleSidebar(false);
        openSidebarBtn.onclick = ()=> toggleSidebar(true);
        closeSidebarBtn.onclick = ()=> toggleSidebar(false);
        
        function handleResponsiveSidebar() {
            if(window.innerWidth <= 768) {
                sidebar.classList.add('collapsed');
                sidebarOverlay.classList.remove('active');
                mainContent.style.marginLeft = '0';
                mainContent.style.width = '100%';
            } else {
                if (!sidebar.classList.contains('collapsed')) {
                    mainContent.style.marginLeft = 'var(--sidebar-width)';
                    mainContent.style.width = 'calc(100% - var(--sidebar-width))';
                } else {
                    mainContent.style.marginLeft = '0';
                    mainContent.style.width = '100%';
                }
            }
        }
        window.addEventListener('resize', handleResponsiveSidebar);
        handleResponsiveSidebar();

        // ==================== TOAST ====================
        function showToast(msg, duration=2500) {
            if (toastTimeout) {
                clearTimeout(toastTimeout);
            }
            
            const existing = toastContainer.querySelector('.toast');
            if (existing) {
                existing.style.animation = 'toastOut 0.3s ease forwards';
                setTimeout(() => existing.remove(), 300);
            }
            
            const toast = document.createElement('div');
            toast.className = `toast`;
            toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${msg}`;
            toastContainer.appendChild(toast);
            
            toastTimeout = setTimeout(() => {
                toast.style.animation = 'toastOut 0.3s ease forwards';
                setTimeout(() => toast.remove(), 300);
                toastTimeout = null;
            }, duration);
        }

        // ==================== TOOLS DROPDOWN ====================
        toolsToggleBtn.onclick = (e) => {
            e.stopPropagation();
            isToolsOpen = !isToolsOpen;
            toolsDropdown.classList.toggle('active');
            toolsToggleBtn.classList.toggle('active');
        };

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.input-tools-menu')) {
                toolsDropdown.classList.remove('active');
                toolsToggleBtn.classList.remove('active');
                isToolsOpen = false;
            }
        });

        // ==================== CHAT FUNCTIONS ====================
        function generateId() { return 'chat_'+Date.now()+'_'+Math.random().toString(36).substr(2,6); }
        
        function createNewChat() {
            const id = generateId(); 
            chats[id] = { 
                title:'Percakapan Baru', 
                messages:[], 
                createdAt:Date.now(),
                lastUsed:Date.now(),
                pinned:false
            };
            activeChatId = id; 
            saveAllChats(); 
            renderSidebar(); 
            renderChat(); 
            userInput.focus();
            if(window.innerWidth <= 768) toggleSidebar(false);
            clearUpload();
            showSettings(false);
        }

        function deleteChat(chatId) {
            if(confirm('Hapus percakapan ini?')) {
                delete chats[chatId]; 
                if(activeChatId===chatId) {
                    const ids = Object.keys(chats).sort((a,b) => (chats[b].lastUsed||chats[b].createdAt||0) - (chats[a].lastUsed||chats[a].createdAt||0));
                    activeChatId = ids[0] || null;
                }
                saveAllChats(); 
                renderSidebar(); 
                renderChat(); 
                if(!activeChatId) showWelcomeScreen();
                showToast('Percakapan dihapus');
            }
        }

        function clearAllChats() {
            if(!Object.keys(chats).length) return;
            if(confirm('Hapus SEMUA percakapan?')) { 
                chats={}; 
                activeChatId=null; 
                saveAllChats(); 
                renderSidebar(); 
                renderChat(); 
                showWelcomeScreen();
                showToast('Semua percakapan dihapus');
            }
        }

        function renameChat(chatId) {
            const chat = chats[chatId];
            if(!chat) return;
            const newName = prompt('Ubah nama percakapan:', chat.title);
            if(newName && newName.trim()) {
                chat.title = newName.trim();
                saveAllChats();
                renderSidebar();
                if(activeChatId === chatId) {
                    currentChatTitle.textContent = chat.title;
                }
                showToast('Nama diubah');
            }
        }

        function togglePinChat(chatId) {
            const chat = chats[chatId];
            if(!chat) return;
            chat.pinned = !chat.pinned;
            saveAllChats();
            renderSidebar();
            showToast(chat.pinned ? 'Disematkan' : 'Dilepas dari sematan');
        }

        function updateChatTitle(chatId) {
            const chat = chats[chatId]; 
            if(!chat||chat.title!=='Percakapan Baru') return;
            const firstUser = chat.messages.find(m=>m.role==='user');
            if(firstUser) { 
                chat.title = firstUser.content.substring(0,40)+(firstUser.content.length>40?'...':''); 
                chat.lastUsed = Date.now();
                saveAllChats(); 
                renderSidebar(); 
            }
        }

        function renderSidebar() {
            const ids = Object.keys(chats);
            const sorted = ids.sort((a,b) => {
                if (chats[a].pinned && !chats[b].pinned) return -1;
                if (!chats[a].pinned && chats[b].pinned) return 1;
                return (chats[b].lastUsed||chats[b].createdAt||0) - (chats[a].lastUsed||chats[a].createdAt||0);
            });
            
            sidebarChatsList.innerHTML = sorted.length ? sorted.map(id=>{
                const c=chats[id]; 
                const active = id===activeChatId;
                const pinIcon = c.pinned ? '<i class="fa-solid fa-thumbtack" style="font-size:0.7rem;color:var(--accent);"></i>' : '';
                return `<div class="chat-history-item ${active?'active':''}" data-chat-id="${id}">
                    <span class="chat-title">${pinIcon} ${escapeHtml(c.title||'Percakapan Baru')}</span>
                    <button class="delete-chat" data-delete-id="${id}"><i class="fa-solid fa-trash"></i></button>
                </div>`;
            }).join('') : '<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:0.85rem;">Belum ada percakapan</div>';
            
            currentChatTitle.textContent = activeChatId&&chats[activeChatId] ? chats[activeChatId].title : 'Percakapan Baru';
            updateChatCount();
        }

        function escapeHtml(s) { const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

        // ==================== SIDEBAR CONTEXT MENU ====================
        sidebarChatsList.addEventListener('contextmenu', (e) => {
            const item = e.target.closest('.chat-history-item');
            if(!item) return;
            e.preventDefault();
            const chatId = item.dataset.chatId;
            if(!chatId) return;
            contextTargetId = chatId;
            showContextMenu(e.clientX, e.clientY);
        });

        let longPressTimer = null;
        sidebarChatsList.addEventListener('mousedown', (e) => {
            const item = e.target.closest('.chat-history-item');
            if(!item) return;
            const chatId = item.dataset.chatId;
            if(!chatId) return;
            contextTargetId = chatId;
            longPressTimer = setTimeout(() => {
                showContextMenu(e.clientX, e.clientY);
            }, 600);
        });

        sidebarChatsList.addEventListener('mouseup', () => {
            if (longPressTimer) {
                clearTimeout(longPressTimer);
                longPressTimer = null;
            }
        });

        sidebarChatsList.addEventListener('mouseleave', () => {
            if (longPressTimer) {
                clearTimeout(longPressTimer);
                longPressTimer = null;
            }
        });

        function showContextMenu(x, y) {
            const menu = contextMenu;
            const menuWidth = 200;
            const menuHeight = 180;
            const maxX = window.innerWidth - menuWidth - 10;
            const maxY = window.innerHeight - menuHeight - 10;
            const posX = Math.min(x, maxX);
            const posY = Math.min(y, maxY);
            
            menu.style.left = posX + 'px';
            menu.style.top = posY + 'px';
            menu.classList.add('active');
        }

        function hideContextMenu() {
            contextMenu.classList.remove('active');
            contextTargetId = null;
        }

        document.addEventListener('click', hideContextMenu);

        contextMenu.addEventListener('click', (e) => {
            const btn = e.target.closest('.menu-item');
            if(!btn) return;
            const action = btn.dataset.action;
            const chatId = contextTargetId;
            if(!chatId) return;
            
            hideContextMenu();
            
            switch(action) {
                case 'rename': renameChat(chatId); break;
                case 'pin': togglePinChat(chatId); break;
                case 'delete': deleteChat(chatId); break;
            }
        });

        // ==================== MESSAGE CONTEXT MENU ====================
        let msgContextTarget = null;
        let msgContextRole = '';

        function showMsgContextMenu(e, element, text, role) {
            e.stopPropagation();
            e.preventDefault();
            
            msgContextTarget = element;
            msgContextRole = role;
            selectedMessageText = text;
            
            const editBtn = document.getElementById('msgEditBtn');
            const editDivider = document.getElementById('msgEditDivider');
            if (role === 'user') {
                editBtn.style.display = 'flex';
                editDivider.style.display = 'block';
            } else {
                editBtn.style.display = 'none';
                editDivider.style.display = 'none';
            }
            
            const menu = msgContextMenu;
            const menuWidth = 200;
            const menuHeight = role === 'user' ? 180 : 120;
            const maxX = window.innerWidth - menuWidth - 10;
            const maxY = window.innerHeight - menuHeight - 10;
            const posX = Math.min(e.clientX, maxX);
            const posY = Math.min(e.clientY, maxY);
            
            menu.style.left = posX + 'px';
            menu.style.top = posY + 'px';
            menu.classList.add('active');
        }

        function hideMsgContextMenu() {
            msgContextMenu.classList.remove('active');
            msgContextTarget = null;
            if (msgContextTarget) {
                msgContextTarget.classList.remove('selected');
            }
        }

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.msg-context-menu')) {
                hideMsgContextMenu();
            }
        });

        msgCopyBtn.onclick = () => {
            if (selectedMessageText) {
                navigator.clipboard.writeText(selectedMessageText).then(() => {
                    showToast('Teks disalin');
                    hideMsgContextMenu();
                }).catch(() => {
                    const textarea = document.createElement('textarea');
                    textarea.value = selectedMessageText;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    textarea.remove();
                    showToast('Teks disalin');
                    hideMsgContextMenu();
                });
            }
        };

        msgSelectBtn.onclick = () => {
            if (msgContextTarget) {
                const range = document.createRange();
                range.selectNodeContents(msgContextTarget);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                showToast('Teks dipilih');
                hideMsgContextMenu();
            }
        };

        msgEditBtn.onclick = () => {
            if (msgContextTarget && msgContextRole === 'user') {
                const text = selectedMessageText;
                if (activeChatId && chats[activeChatId]) {
                    const chat = chats[activeChatId];
                    for (let i = chat.messages.length - 1; i >= 0; i--) {
                        if (chat.messages[i].role === 'user' && chat.messages[i].content === text) {
                            const newText = prompt('Edit pesan:', text);
                            if (newText && newText.trim()) {
                                chat.messages[i].content = newText.trim();
                                chat.lastUsed = Date.now();
                                saveAllChats();
                                renderChat();
                                scrollToBottom();
                                showToast('Pesan diedit');
                            }
                            break;
                        }
                    }
                }
                hideMsgContextMenu();
            }
        };

        // ==================== MESSAGE CLICK HANDLER ====================
        chatArea.addEventListener('click', (e) => {
            if (e.target.closest('.image-action-btn') || e.target.closest('.generated-image')) {
                return;
            }
            
            const bubble = e.target.closest('.message-bubble');
            if (!bubble) return;
            
            const row = bubble.closest('.message-row');
            if (!row) return;
            
            const role = row.classList.contains('user') ? 'user' : 'ai';
            const text = bubble.textContent.trim();
            
            if (text && !text.startsWith('Berikut gambar') && !text.startsWith('Hasil')) {
                showMsgContextMenu(e, bubble, text, role);
            }
        });

        let msgLongPressTimer = null;
        chatArea.addEventListener('mousedown', (e) => {
            const bubble = e.target.closest('.message-bubble');
            if (!bubble) return;
            if (e.target.closest('.image-action-btn') || e.target.closest('.generated-image')) return;
            
            const row = bubble.closest('.message-row');
            if (!row) return;
            const role = row.classList.contains('user') ? 'user' : 'ai';
            const text = bubble.textContent.trim();
            
            if (text && !text.startsWith('Berikut gambar') && !text.startsWith('Hasil')) {
                msgLongPressTimer = setTimeout(() => {
                    showMsgContextMenu(e, bubble, text, role);
                }, 500);
            }
        });

        chatArea.addEventListener('mouseup', () => {
            if (msgLongPressTimer) {
                clearTimeout(msgLongPressTimer);
                msgLongPressTimer = null;
            }
        });

        chatArea.addEventListener('mouseleave', () => {
            if (msgLongPressTimer) {
                clearTimeout(msgLongPressTimer);
                msgLongPressTimer = null;
            }
        });

        // ==================== SETTINGS ====================
        function showSettings(show) {
            if (show === undefined) {
                const isActive = settingsPage.classList.contains('active');
                settingsPage.classList.toggle('active');
                chatArea.classList.toggle('hidden');
                inputArea.classList.toggle('hidden');
                if (!settingsPage.classList.contains('active')) {
                    renderChat();
                }
            } else if (show) {
                settingsPage.classList.add('active');
                chatArea.classList.add('hidden');
                inputArea.classList.add('hidden');
            } else {
                settingsPage.classList.remove('active');
                chatArea.classList.remove('hidden');
                inputArea.classList.remove('hidden');
                renderChat();
            }
        }

        settingsBtn.onclick = () => {
            toggleSidebar(false);
            showSettings(true);
        };

        settingsBackBtn.onclick = () => {
            showSettings(false);
        };

        darkModeToggle.onclick = () => {
            toggleTheme();
        };

        fontSizeSelect.onchange = () => {
            const size = fontSizeSelect.value;
            const sizes = { small: '0.8rem', medium: '0.92rem', large: '1.05rem' };
            document.querySelectorAll('.message-bubble').forEach(el => {
                el.style.fontSize = sizes[size] || '0.92rem';
            });
            try { localStorage.setItem('nexaai_fontSize', size); } catch(e) {}
            showToast('Ukuran font diubah');
        };

        try {
            const savedSize = localStorage.getItem('nexaai_fontSize');
            if (savedSize) {
                fontSizeSelect.value = savedSize;
                const sizes = { small: '0.8rem', medium: '0.92rem', large: '1.05rem' };
                document.querySelectorAll('.message-bubble').forEach(el => {
                    el.style.fontSize = sizes[savedSize] || '0.92rem';
                });
            }
        } catch(e) {}

        // ==================== LANGUAGE SETTINGS ====================
        languageSelect.onchange = () => {
            const lang = languageSelect.value;
            loadLanguage(lang);
        };

        // ==================== AI MODE ====================
        aiModeSelect.onchange = () => {
            showToast('Mode AI diubah menjadi ' + aiModeSelect.options[aiModeSelect.selectedIndex].text);
        };

        imageQualitySelect.onchange = () => {
            showToast('Kualitas gambar diubah');
        };

        autoSaveToggle.onclick = () => {
            autoSaveToggle.classList.toggle('active');
            showToast(autoSaveToggle.classList.contains('active') ? 'Auto save aktif' : 'Auto save nonaktif');
        };

        clearHistoryBtn.onclick = () => {
            if (confirm('Hapus semua riwayat chat?')) {
                clearAllChats();
                showToast('Riwayat dihapus');
            }
        };

        exportDataBtn.onclick = () => {
            const data = JSON.stringify(chats, null, 2);
            const blob = new Blob([data], {type: 'application/json'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `nexaai_chats_${Date.now()}.json`;
            a.click();
            URL.revokeObjectURL(url);
            showToast('Data diekspor');
        };

        // ==================== CHAT RENDER ====================
        function renderChat() {
            if (settingsPage.classList.contains('active')) return;
            if(!activeChatId||!chats[activeChatId]) { showWelcomeScreen(); return; }
            const chat = chats[activeChatId]; 
            welcomeScreen.style.display='none';
            chatArea.querySelectorAll('.message-row').forEach(r=>r.remove());
            if(!chat.messages.length) { showWelcomeScreen(); return; }
            chat.messages.forEach((msg,i)=> chatArea.appendChild(createMessageRow(msg,i)));
            scrollToBottom();
        }

        function showWelcomeScreen() {
            chatArea.querySelectorAll('.message-row').forEach(r=>r.remove());
            welcomeScreen.style.display='';
            currentChatTitle.textContent = 'Percakapan Baru';
        }

        // ==================== MESSAGE FORMATTING ====================
        function formatMessage(text) {
            if (!text) return '';
            
            let f = escapeHtml(text);
            
            f = f.replace(/^### (.+)$/gm, '<h3>$1</h3>');
            f = f.replace(/^## (.+)$/gm, '<h2>$1</h2>');
            f = f.replace(/^# (.+)$/gm, '<h1>$1</h1>');
            
            f = f.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
            f = f.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
            f = f.replace(/\*(.+?)\*/g, '<em>$1</em>');
            f = f.replace(/___(.+?)___/g, '<strong><em>$1</em></strong>');
            f = f.replace(/__(.+?)__/g, '<strong>$1</strong>');
            f = f.replace(/_(.+?)_/g, '<em>$1</em>');
            
            f = f.replace(/```([\s\S]+?)```/g, '<pre><code>$1</code></pre>');
            f = f.replace(/`([^`]+)`/g, '<code>$1</code>');
            
            f = f.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
            
            f = f.replace(/^- (.+)$/gm, '<li>$1</li>');
            f = f.replace(/^• (.+)$/gm, '<li>$1</li>');
            f = f.replace(/^(\d+)\. (.+)$/gm, '<li value="$1">$2</li>');
            
            f = f.replace(/(<li[^>]*>.*?<\/li>)/g, (match) => {
                if (match.includes('value=')) {
                    return `<ol>${match}</ol>`;
                }
                return `<ul>${match}</ul>`;
            });
            
            f = f.replace(/<\/ul>\s*<ul>/g, '');
            f = f.replace(/<\/ol>\s*<ol>/g, '');
            
            f = f.replace(/^---$/gm, '<hr>');
            f = f.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
            
            f = f.replace(/\|(.+)\|/g, (match) => {
                const cells = match.split('|').filter(c => c.trim());
                const isHeader = match.includes('---');
                if (isHeader) return '';
                return `<tr>${cells.map(c => `<td>${c.trim()}</td>`).join('')}</tr>`;
            });
            
            f = f.replace(/\n\n/g, '</p><p>');
            f = f.replace(/\n/g, '<br>');
            
            if (!f.startsWith('<')) {
                f = `<p>${f}</p>`;
            }
            
            return f;
        }

        function createImageLoading() {
            return `<div class="image-loading-overlay">
                <div style="min-height:200px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;">
                    <div class="loading-spinner">
                        <svg viewBox="0 0 60 60">
                            <circle class="ring-bg" cx="30" cy="30" r="25"/>
                            <circle class="ring" cx="30" cy="30" r="25"/>
                        </svg>
                    </div>
                    <div class="loading-text">Memproses gambar...</div>
                </div>
            </div>`;
        }

        function createMessageRow(msg, index) {
            const row = document.createElement('div'); 
            row.className=`message-row ${msg.role}`;
            row.dataset.index = index;
            
            let contentHtml = '';
            if(msg.isImage) {
                contentHtml = `<div style="font-weight:500;margin-bottom:4px;">${escapeHtml(msg.prompt||'')}</div>
                    <img src="${escapeHtml(msg.imageUrl)}" class="generated-image" data-image-url="${escapeHtml(msg.imageUrl)}">
                    <div class="image-actions">
                        <button class="image-action-btn download" data-download-url="${escapeHtml(msg.imageUrl)}"><i class="fa-solid fa-download"></i> <span data-i18n="imageDownload">Unduh</span></button>
                        <button class="image-action-btn remove-bg" data-remove-bg-url="${escapeHtml(msg.imageUrl)}"><i class="fa-solid fa-wand-magic-sparkles"></i> <span data-i18n="imageRemoveBg">Hapus BG</span></button>
                        <button class="image-action-btn enhance" data-enhance-url="${escapeHtml(msg.imageUrl)}"><i class="fa-solid fa-wand-magic-sparkles"></i> <span data-i18n="imageEnhance">Perjelas</span></button>
                    </div>`;
            } else if(msg.isError) {
                contentHtml = `<div style="color:var(--error);">${escapeHtml(msg.content)}</div>
                    <button class="error-retry-btn" data-retry-prompt="${escapeHtml(msg.retryPrompt||'')}"><i class="fa-solid fa-rotate-right"></i> Coba Lagi</button>`;
            } else if(msg.isLoading) {
                contentHtml = createImageLoading();
            } else if(msg.isSearch) {
                let resultsHtml = `<div style="margin-bottom:10px;font-weight:600;color:var(--accent-light);font-size:0.95rem;">
                    <i class="fa-brands fa-google" style="color:var(--google-color);"></i> Hasil Pencarian: <strong>${escapeHtml(msg.query)}</strong>
                </div>`;
                
                if (msg.isLoading) {
                    resultsHtml += `<div class="search-loading"><span class="spinner-small"></span> Mencari di Google...</div>`;
                } else if (msg.results && msg.results.length > 0) {
                    resultsHtml += `<div class="search-results-container">`;
                    msg.results.slice(0, 2).forEach(r => {
                        resultsHtml += `
                            <div class="search-result-item" onclick="window.open('${escapeHtml(r.link)}', '_blank')">
                                <div class="result-title">${escapeHtml(r.title)}</div>
                                <div class="result-link">${escapeHtml(r.link)}</div>
                                <div class="result-snippet">${escapeHtml(r.snippet)}</div>
                            </div>
                        `;
                    });
                    resultsHtml += `</div>`;
                } else {
                    resultsHtml += `<div style="color:var(--text-muted);padding:12px;">Tidak ada hasil ditemukan.</div>`;
                }
                
                contentHtml = resultsHtml;
            } else {
                contentHtml = formatMessage(msg.content);
            }
            
            row.innerHTML = `<div class="message-bubble" data-role="${msg.role}">${contentHtml}</div>`;
            return row;
        }

        // ==================== ADD MESSAGE WITH TYPING ANIMATION ====================
        function addMessageToChat(role, content, extra = {}) {
            if (!activeChatId || !chats[activeChatId]) createNewChat();
            const chat = chats[activeChatId];
            chat.messages.push({ role, content, timestamp: Date.now(), ...extra });
            chat.lastUsed = Date.now();
            updateChatTitle(activeChatId);
            saveAllChats();
            
            if (settingsPage.classList.contains('active')) return;
            
            // Jika pesan dari AI, gunakan animasi mengetik dengan delay
            if (role === 'ai' && !extra.isImage && !extra.isError && !extra.isSearch) {
                const msgIndex = chat.messages.length - 1;
                const row = createMessageRow(chat.messages[msgIndex], msgIndex);
                chatArea.appendChild(row);
                if (welcomeScreen) welcomeScreen.style.display = 'none';
                scrollToBottom();
                renderSidebar();
                
                // Animasi mengetik dengan delay natural
                const bubble = row.querySelector('.message-bubble');
                const fullText = content;
                bubble.innerHTML = ''; // Kosongkan dulu
                let charIndex = 0;
                const typingSpeed = 20; // milidetik per karakter
                let isPaused = false;
                let pauseTimer = null;
                
                function typeChar() {
                    if (isPaused) return;
                    
                    if (charIndex < fullText.length) {
                        // Tambahkan karakter satu per satu
                        const currentText = fullText.substring(0, charIndex + 1);
                        bubble.innerHTML = formatMessage(currentText);
                        charIndex++;
                        scrollToBottom();
                        
                        // Simulasi jeda natural untuk tanda baca
                        const nextChar = fullText.charAt(charIndex);
                        let delay = typingSpeed;
                        if (['.', '!', '?', ',', ';', ':'].includes(nextChar)) {
                            delay = typingSpeed * 3;
                        } else if (['\n'].includes(nextChar)) {
                            delay = typingSpeed * 2;
                        }
                        
                        setTimeout(typeChar, delay);
                    } else {
                        // Selesai, update chat terakhir
                        chat.messages[msgIndex].content = fullText;
                        saveAllChats();
                    }
                }
                
                // Mulai mengetik dengan delay awal 300ms
                setTimeout(typeChar, 300);
            } else {
                // Untuk pesan user atau tipe lain, tampilkan langsung
                chatArea.appendChild(createMessageRow(chat.messages[chat.messages.length - 1], chat.messages.length - 1));
                if (welcomeScreen) welcomeScreen.style.display = 'none';
                scrollToBottom();
                renderSidebar();
            }
        }

        function scrollToBottom() { 
            setTimeout(()=>{ chatArea.scrollTop = chatArea.scrollHeight; },100); 
        }

        // ==================== UPLOAD IMAGE ====================
        function formatFileSize(bytes) {
            if (bytes < 1024) return bytes + ' B';
            if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
            return (bytes / 1048576).toFixed(1) + ' MB';
        }

        function triggerUpload() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if(file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        uploadedImage = ev.target.result;
                        uploadPreviewImage.src = uploadedImage;
                        uploadFileName.textContent = file.name;
                        uploadFileSize.textContent = formatFileSize(file.size);
                        uploadPreview.classList.add('active');
                        uploadLoadingOverlay.classList.remove('active');
                        toolsDropdown.classList.remove('active');
                        toolsToggleBtn.classList.remove('active');
                        isToolsOpen = false;
                        showToast('Gambar berhasil diupload');
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        }

        function clearUpload() {
            uploadedImage = null;
            uploadPreview.classList.remove('active');
            uploadPreviewImage.src = '';
            uploadLoadingOverlay.classList.remove('active');
        }

        function showUploadLoading(show) {
            if (show) {
                uploadLoadingOverlay.classList.add('active');
            } else {
                uploadLoadingOverlay.classList.remove('active');
            }
        }

        // ==================== GOOGLE SEARCH ====================
        function searchGoogle(query) {
            return new Promise((resolve, reject) => {
                try {
                    const cx = '90b13aeccde09420f';
                    const apiKey = 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY';
                    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}&num=10`;
                    
                    fetch(url)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            if (data.items && data.items.length > 0) {
                                const results = data.items.map(item => ({
                                    title: item.title,
                                    link: item.link,
                                    snippet: item.snippet || item.title
                                }));
                                resolve(results);
                            } else {
                                resolve([]);
                            }
                        })
                        .catch(error => {
                            console.warn('Google CSE API error, using fallback:', error);
                            const fallbackResults = [
                                {
                                    title: `${query} - Informasi Terkait`,
                                    link: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
                                    snippet: `Hasil pencarian untuk "${query}". Klik untuk melihat lebih lanjut.`
                                },
                                {
                                    title: `Cari "${query}" di Google`,
                                    link: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
                                    snippet: `Buka Google untuk hasil pencarian lengkap.`
                                }
                            ];
                            resolve(fallbackResults);
                        });
                } catch(e) {
                    reject(e);
                }
            });
        }

        async function performGoogleSearch(query) {
            try {
                showToast('Mencari di Google...');
                
                if(!activeChatId||!chats[activeChatId]) createNewChat();
                
                const chat = chats[activeChatId];
                const searchMsg = {
                    role: 'ai',
                    content: '',
                    isSearch: true,
                    query: query,
                    results: [],
                    isLoading: true
                };
                
                chat.messages.push(searchMsg);
                chat.lastUsed = Date.now();
                saveAllChats();
                
                if (!settingsPage.classList.contains('active')) {
                    chatArea.appendChild(createMessageRow(searchMsg, chat.messages.length - 1));
                    if(welcomeScreen) welcomeScreen.style.display='none';
                    scrollToBottom();
                }
                
                const results = await searchGoogle(query);
                
                const messages = chat.messages;
                const lastMsg = messages[messages.length - 1];
                if (lastMsg && lastMsg.isSearch) {
                    lastMsg.results = results;
                    lastMsg.isLoading = false;
                    saveAllChats();
                    
                    if (!settingsPage.classList.contains('active')) {
                        chatArea.querySelectorAll('.message-row').forEach(r => r.remove());
                        chat.messages.forEach((msg, i) => chatArea.appendChild(createMessageRow(msg, i)));
                        scrollToBottom();
                        renderSidebar();
                    }
                }
                
                if (results.length > 0) {
                    showToast(results.length + ' hasil ditemukan');
                } else {
                    showToast('Tidak ada hasil ditemukan');
                }
                
            } catch(e) {
                showToast('Gagal mencari: ' + e.message);
            }
        }

        // ==================== IMAGE ENHANCE ====================
        async function enhanceImage(imageDataUrl) {
            try {
                showToast('Memperjelas gambar...');
                
                if(lightbox.classList.contains('active')) {
                    lightboxLoading.classList.add('active');
                } else {
                    showUploadLoading(true);
                }
                
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                const img = new Image();
                img.src = imageDataUrl;
                await new Promise(resolve => { img.onload = resolve; });
                
                const canvas = document.createElement('canvas');
                canvas.width = img.width * 1.5;
                canvas.height = img.height * 1.5;
                const ctx = canvas.getContext('2d');
                
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                const contrast = 1.1;
                for (let i = 0; i < data.length; i += 4) {
                    data[i] = Math.min(255, Math.max(0, data[i] * contrast));
                    data[i+1] = Math.min(255, Math.max(0, data[i+1] * contrast));
                    data[i+2] = Math.min(255, Math.max(0, data[i+2] * contrast));
                }
                ctx.putImageData(imageData, 0, 0);
                
                const enhancedUrl = canvas.toDataURL('image/png');
                
                lightboxLoading.classList.remove('active');
                showUploadLoading(false);
                
                return enhancedUrl;
            } catch(e) {
                console.error('Enhance image error:', e);
                lightboxLoading.classList.remove('active');
                showUploadLoading(false);
                showToast('Gagal memperjelas gambar');
                return imageDataUrl;
            }
        }

        async function processEnhanceImage(imageUrl) {
            try {
                // Tampilkan loading di chat
                showToast('Memperjelas gambar...');
                
                const result = await enhanceImage(imageUrl);
                if(result && result !== imageUrl) {
                    if(lightbox.classList.contains('active')) {
                        lightbox.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                    clearUpload();
                    addMessageToChat('ai', 'Hasil perjelas gambar:', {isImage: true, imageUrl: result, prompt: '✨ Gambar diperjelas'});
                    showToast('Gambar berhasil diperjelas');
                }
            } catch(e) {
                showToast('Gagal memperjelas gambar');
            }
        }

        // ==================== REMOVE BACKGROUND ====================
        async function removeBackground(imageDataUrl) {
            try {
                showToast('Menghapus background...');
                
                if(lightbox.classList.contains('active')) {
                    lightboxLoading.classList.add('active');
                } else {
                    showUploadLoading(true);
                }
                
                const response = await fetch(imageDataUrl);
                const blob = await response.blob();
                
                const formData = new FormData();
                formData.append('image_file', blob, 'image.png');
                formData.append('size', 'auto');
                
                const result = await fetch('https://api.remove.bg/v1.0/removebg', {
                    method: 'POST',
                    headers: {
                        'X-Api-Key': 'gn2RpYgMjpc16qM1DLaJXCy1',
                    },
                    body: formData
                });
                
                lightboxLoading.classList.remove('active');
                showUploadLoading(false);
                
                if(!result.ok) {
                    throw new Error('API limit reached');
                }
                
                const blobResult = await result.blob();
                const url = URL.createObjectURL(blobResult);
                return url;
            } catch(e) {
                console.error('Remove BG error:', e);
                lightboxLoading.classList.remove('active');
                showUploadLoading(false);
                showToast('Gagal menghapus background');
                return imageDataUrl;
            }
        }

        async function processRemoveBg(imageUrl) {
            try {
                showToast('Menghapus background...');
                
                const result = await removeBackground(imageUrl);
                if(result && result !== imageUrl) {
                    if(lightbox.classList.contains('active')) {
                        lightbox.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                    clearUpload();
                    addMessageToChat('ai', 'Hasil hapus background:', {isImage: true, imageUrl: result, prompt: '🪄 Background dihapus'});
                    showToast('Background berhasil dihapus');
                }
            } catch(e) {
                showToast('Gagal menghapus background');
            }
        }

        // ==================== SIDEBAR CLICK ====================
        sidebarChatsList.addEventListener('click', e => {
            const item = e.target.closest('.chat-history-item'); 
            const del = e.target.closest('.delete-chat');
            if(del) { 
                e.stopPropagation(); 
                deleteChat(del.dataset.deleteId); 
                return; 
            }
            if(item && item.dataset.chatId !== activeChatId) { 
                activeChatId = item.dataset.chatId; 
                chats[activeChatId].lastUsed = Date.now();
                saveAllChats(); 
                renderSidebar(); 
                renderChat(); 
                scrollToBottom(); 
            }
            if(window.innerWidth <= 768) toggleSidebar(false);
            clearUpload();
        });

        // ==================== CHAT AREA CLICK ====================
        chatArea.addEventListener('click', async e => {
            const downloadBtn = e.target.closest('.image-action-btn.download');
            if(downloadBtn) {
                e.stopPropagation();
                downloadImageFromUrl(downloadBtn.dataset.downloadUrl);
                return;
            }

            const removeBgBtnEl = e.target.closest('.image-action-btn.remove-bg');
            if(removeBgBtnEl) {
                e.stopPropagation();
                const url = removeBgBtnEl.dataset.removeBgUrl;
                if(url) {
                    await processRemoveBg(url);
                }
                return;
            }

            const enhanceBtn = e.target.closest('.image-action-btn.enhance');
            if(enhanceBtn) {
                e.stopPropagation();
                const url = enhanceBtn.dataset.enhanceUrl;
                if(url) {
                    await processEnhanceImage(url);
                }
                return;
            }

            const img = e.target.closest('.generated-image');
            if(img) {
                currentImageUrl = img.dataset.imageUrl;
                lightboxImage.src = currentImageUrl;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
                lightboxLoading.classList.remove('active');
            }

            const retryBtn = e.target.closest('.error-retry-btn');
            if(retryBtn) {
                const prompt = retryBtn.dataset.retryPrompt;
                if(prompt) { userInput.value = prompt; handleSendMessage(); }
            }
        });







/*
        async function downloadImageFromUrl(url, filename='nexaai-image.png') {
            try {
                const res = await fetch(url); 
                const blob = await res.blob();
                const blobUrl = URL.createObjectURL(blob);
                const a = document.createElement('a'); 
                a.href=blobUrl; 
                a.download=filename; 
                a.click();
                URL.revokeObjectURL(blobUrl); 
                showToast('Gambar diunduh');
            } catch(e) { 
                window.open(url,'_blank'); 
                showToast('Dibuka di tab baru'); 
            }
        }
        */
        
async function downloadImageFromUrl(url, filename='alovera-ai') {

    try {

        // ================================
        // ANDROID APP
        // ================================
        if (window.AndroidDownload &&
            typeof window.AndroidDownload.saveImage === 'function') {

            window.onAndroidDownloadResult = function(success, message) {

                if (success) {
                    showToast('Gambar diunduh');
                } else {
                    showToast(message || 'Gagal menyimpan gambar');
                }

                window.onAndroidDownloadResult = null;
            };

            window.AndroidDownload.saveImage(url, filename);

            return;
        }

        // ================================
        // WEB BROWSER
        // ================================
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error('Gagal mengambil gambar');
        }

        const blob = await res.blob();

        const blobUrl = URL.createObjectURL(blob);

        const a = document.createElement('a');

        a.href = blobUrl;
        a.download = filename;

        document.body.appendChild(a);
        a.click();
        a.remove();

        setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
        }, 1000);

        showToast('Gambar diunduh');

    } catch (e) {

        console.error('Download error:', e);

        showToast('Gagal mengunduh gambar');
    }
}




        
        

        // ==================== LIGHTBOX ====================
        lightboxClose.onclick = ()=>{ 
            lightbox.classList.remove('active'); 
            document.body.style.overflow=''; 
            lightboxLoading.classList.remove('active');
        };
        
        lightbox.addEventListener('click', e=>{ 
            if(e.target===lightbox) { 
                lightbox.classList.remove('active'); 
                document.body.style.overflow=''; 
                lightboxLoading.classList.remove('active');
            } 
        });
        
        lightboxDownload.onclick = ()=>{ 
            if(lightboxImage.src) downloadImageFromUrl(lightboxImage.src); 
        };
        
        lightboxRemoveBg.onclick = async ()=>{
            if(lightboxImage.src) {
                await processRemoveBg(lightboxImage.src);
            }
        };
        
        lightboxEnhance.onclick = async ()=>{
            if(lightboxImage.src) {
                await processEnhanceImage(lightboxImage.src);
            }
        };
        
        document.addEventListener('keydown', e=>{ 
            if(e.key==='Escape'&&lightbox.classList.contains('active')) { 
                lightbox.classList.remove('active'); 
                document.body.style.overflow=''; 
                lightboxLoading.classList.remove('active');
            } 
        });

        // ==================== IMAGE GENERATION ====================
        async function generateImageFromPrompt(prompt) {
            const enhanced = prompt + ', highly detailed, photorealistic, 8K';
            const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhanced)}?width=1024&height=1024&seed=${Math.floor(Math.random()*999999)}&nologo=true&model=flux`;
            return url;
        }

        // ==================== FUNGSI CHAT AI (dari dhea.html) ====================
        function isSearchRequest(text) {
            const lower = text.toLowerCase().trim();
            return /cari|search|google|telusuri|informasi|tentang|apa itu|siapa itu|bagaimana|kenapa|mengapa|dimana|kapan/i.test(lower);
        }

        function isImageRequest(text) {
            const lower = text.toLowerCase().trim();
            return /gambar|buatkan gambar|foto|ilustrasi|sketsa|draw|create image|make image|tunjukkan gambar|visualisasikan/i.test(lower);
        }

        function extractImagePrompt(text) {
            const patterns = [
                /(?:buatkan|buat|bikinin|tolong|coba)\s*gambar\s*(?:tentang|mengenai|dari|yang)?\s*(.+)/i,
                /gambar\s*(?:tentang|mengenai|dari|yang)?\s*(.+)/i,
                /(?:generate|create|make)\s*(?:image|gambar)\s*(?:of|about)?\s*(.+)/i,
            ];
            for(const p of patterns) { 
                const m = text.match(p); 
                if(m && m[1] && m[1].length > 3) return m[1].trim(); 
            }
            return text.replace(/(buatkan|gambar|foto|ilustrasi|generate|create)/gi,'').trim() || text.trim();
        }

        // ==================== TYPING INDICATOR (Loading AI) ====================
        function showTypingIndicator() {
            const row = document.createElement('div'); 
            row.className='message-row ai'; 
            row.id='typing-indicator-row';
            row.innerHTML = `<div class="message-bubble" style="padding:14px 20px;">
                <div style="display:flex;align-items:center;gap:12px;">
                    <div class="typing-indicator"><span></span><span></span><span></span></div>
                    <span style="font-size:0.8rem;color:var(--text-muted);" data-i18n="typingText">Mengetik...</span>
                </div>
            </div>`;
            welcomeScreen.style.display='none'; 
            chatArea.appendChild(row); 
            scrollToBottom();
            return row;
        }

        function removeTypingIndicator(row) { 
            if(row && row.parentNode) row.remove(); 
            else document.getElementById('typing-indicator-row')?.remove(); 
        }

        // ==================== HANDLE SEND MESSAGE ====================
        async function handleSendMessage() {
            if(isProcessing) return;
            const text = userInput.value.trim(); 
            if(!text && !uploadedImage) {
                showToast('Silakan ketik pesan atau upload gambar');
                return;
            }
            
            if(!activeChatId||!chats[activeChatId]) createNewChat();
            
            // Cek apakah ini pencarian Google
            if(text && isSearchRequest(text)) {
                await performGoogleSearch(text);
                userInput.value = '';
                userInput.style.height = 'auto';
                return;
            }
            
            // Cek apakah upload gambar
            if(uploadedImage) {
                addMessageToChat('user', text || 'Upload gambar', {image: uploadedImage});
                const imgUrl = uploadedImage;
                clearUpload();
                addMessageToChat('ai', `Berikut gambar yang Anda upload:`, {isImage: true, imageUrl: imgUrl, prompt: text || '📷 Gambar yang diupload'});
                userInput.value = '';
                userInput.style.height = 'auto';
                return;
            }
            
            // Tambahkan pesan user ke chat
            addMessageToChat('user', text);
            userInput.value=''; 
            userInput.style.height='auto';
            isProcessing=true; 
            sendBtn.disabled=true;
            
            // Tampilkan indicator loading
            const typingRow = showTypingIndicator(); 
            
            // Proses respons AI berdasarkan keyword
            try {
                // Cek apakah ini permintaan gambar
                if(isImageRequest(text)) {
                    const imgPrompt = extractImagePrompt(text);
                    const imgUrl = await generateImageFromPrompt(imgPrompt);
                    const img = new Image(); 
                    img.src = imgUrl;
                    await new Promise((resolve,reject)=>{ 
                        img.onload=resolve; 
                        img.onerror=()=>reject(new Error('Gagal memuat gambar')); 
                        setTimeout(()=>reject(new Error('Timeout gambar')),30000); 
                    });
                    removeTypingIndicator(typingRow);
                    addMessageToChat('ai', `Berikut gambar: **${imgPrompt}**`, {isImage:true, imageUrl:imgUrl, prompt:imgPrompt});
                } else {
                    // === KEYWORD-BASED CHAT AI ===
                    const kataUser = text.toLowerCase().trim();
                    const kataTerpisah = kataUser.split(/\s+/);
                    
                    // Temukan kategori yang cocok
                    let kategoriCocok = [];
                    for (let kategori in sinonimData) {
                        if (kataTerpisah.some(kata => sinonimData[kategori] && sinonimData[kategori].includes(kata))) {
                            kategoriCocok.push(kategori);
                        }
                    }
                    
                    let jawaban = '';
                    if (kategoriCocok.length > 0) {
                        let jawabanGabungan = kategoriCocok.map(kat => {
                            const pilihan = jawabanData[kat] || [];
                            return pilihan[Math.floor(Math.random() * pilihan.length)] || '';
                        }).filter(j => j).join(" ");
                        jawaban = jawabanGabungan || unknownData[Math.floor(Math.random() * unknownData.length)];
                    } else {
                        jawaban = unknownData[Math.floor(Math.random() * unknownData.length)];
                    }
                    
                    // Hapus indicator loading setelah 500ms (agar terlihat natural)
                    setTimeout(() => {
                        removeTypingIndicator(typingRow);
                        addMessageToChat('ai', jawaban);
                    }, 500);
                }
            } catch(e) {
                removeTypingIndicator(typingRow);
                const errMsg = `Gagal: ${e.message||'Kesalahan tidak diketahui'}.`;
                addMessageToChat('ai', errMsg, {isError:true, retryPrompt:text});
                showToast('Gagal memproses, coba lagi');
            } finally {
                isProcessing=false; 
                sendBtn.disabled=false; 
                userInput.focus();
            }
        }

        // ==================== TOOLS BUTTONS ====================
        uploadImageBtn.onclick = (e) => {
            e.stopPropagation();
            triggerUpload();
        };

        removeUploadBtn.onclick = clearUpload;

        previewRemoveBg.onclick = () => {
            if(uploadedImage) processRemoveBg(uploadedImage);
        };

        previewEnhance.onclick = () => {
            if(uploadedImage) processEnhanceImage(uploadedImage);
        };

        removeBgBtn.onclick = (e) => {
            e.stopPropagation();
            triggerUpload();
            toolsDropdown.classList.remove('active');
            toolsToggleBtn.classList.remove('active');
            isToolsOpen = false;
        };

        enhanceImageBtn.onclick = (e) => {
            e.stopPropagation();
            triggerUpload();
            toolsDropdown.classList.remove('active');
            toolsToggleBtn.classList.remove('active');
            isToolsOpen = false;
        };

        googleSearchBtn.onclick = (e) => {
            e.stopPropagation();
            const text = userInput.value.trim();
            if(!text) {
                showToast('Ketik kata kunci pencarian terlebih dahulu');
                return;
            }
            performGoogleSearch(text);
            toolsDropdown.classList.remove('active');
            toolsToggleBtn.classList.remove('active');
            isToolsOpen = false;
        };

        // ==================== EVENT LISTENERS ====================
        sendBtn.onclick = handleSendMessage;
        
        newChatSidebarBtn.onclick = ()=>{ 
            createNewChat(); 
            renderChat(); 
            showWelcomeScreen(); 
            userInput.focus(); 
            if(window.innerWidth<=768) toggleSidebar(false); 
        };
        
        newChatTopBtn.onclick = ()=>{ 
            createNewChat(); 
            renderChat(); 
            showWelcomeScreen(); 
            userInput.focus(); 
        };
        
        userInput.addEventListener('keydown', e=>{ 
            if(e.key==='Enter' && !e.shiftKey){ 
                e.preventDefault(); 
                handleSendMessage(); 
            } 
        });
        
        userInput.addEventListener('input', ()=>{ 
            userInput.style.height='auto'; 
            userInput.style.height=Math.min(userInput.scrollHeight,200)+'px'; 
        });
        
        themeToggleBtn.onclick = toggleTheme;
        clearAllChatsBtn.onclick = clearAllChats;
        
        suggestionsList.addEventListener('click', e=>{
            const chip = e.target.closest('.suggestion-chip');
            if(chip){ 
                const text = chip.textContent;
                if(text.toLowerCase().includes('cari') || text.toLowerCase().includes('google')) {
                    performGoogleSearch(text);
                } else {
                    userInput.value = text; 
                    handleSendMessage();
                }
            }
        });

        // ==================== INIT ====================
        // Load language
        const savedLang = localStorage.getItem('nexaai_language') || 'id';
        languageSelect.value = savedLang;
        loadLanguage(savedLang);
        
        loadAllChats(); 
        renderSidebar();
        
        if(activeChatId && chats[activeChatId]) { 
            renderChat(); 
            scrollToBottom(); 
        } else if(Object.keys(chats).length) { 
            const sorted = Object.keys(chats).sort((a,b) => (chats[b].lastUsed||chats[b].createdAt||0) - (chats[a].lastUsed||chats[a].createdAt||0));
            activeChatId = sorted[0]; 
            renderChat(); 
            scrollToBottom(); 
        } else {
            showWelcomeScreen();
        }
        
        userInput.focus();
        showToast('Selamat Datang');

    })();

    // ============================================================
    //  MODAL - KEBIJAKAN PRIVASI, BANTUAN, TENTANG
    // ============================================================

    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    function openModal(title, content) {
        modalTitle.innerHTML = title;
        modalBody.innerHTML = content;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.onclick = closeModal;
    modalCloseBtn.onclick = closeModal;
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    document.getElementById('privacyPolicyBtn').addEventListener('click', function() {
        openModal(
            '<i class="fa-solid fa-shield-halved"></i> <span data-i18n="privacyModalTitle">Kebijakan Privasi</span>',
            `
            <p><strong data-i18n="privacyUpdated">Terakhir diperbarui:</strong> 1 Januari 2025</p>
            <h4 data-i18n="privacyInfoTitle">1. Informasi yang Kami Kumpulkan</h4>
            <p data-i18n="privacyInfoDesc"> Alovera AI mengumpulkan beberapa informasi untuk meningkatkan pengalaman pengguna:</p>
            <ul>
                <li><strong data-i18n="privacyChatData">Data Chat:</strong> <span data-i18n="privacyChatDesc">Percakapan Anda dengan AI disimpan secara lokal di perangkat Anda.</span></li>
                <li><strong data-i18n="privacyUserData">Data Pengguna:</strong> <span data-i18n="privacyUserDesc">Jika Anda mendaftar, kami menyimpan nama dan email Anda.</span></li>
                <li><strong data-i18n="privacyImageData">Data Gambar:</strong> <span data-i18n="privacyImageDesc">Gambar yang Anda upload diproses dan tidak disimpan secara permanen.</span></li>
            </ul>
            <h4 data-i18n="privacyUsageTitle">2. Penggunaan Data</h4>
            <ul>
                <li data-i18n="privacyUsage1">Untuk menyediakan layanan chat AI dan generasi gambar.</li>
                <li data-i18n="privacyUsage2">Untuk meningkatkan kualitas respons AI.</li>
                <li data-i18n="privacyUsage3">Untuk menyimpan preferensi pengguna (tema, ukuran font).</li>
            </ul>
            <h4 data-i18n="privacyStorageTitle">3. Penyimpanan Data</h4>
            <ul>
                <li data-i18n="privacyStorage1">Data chat disimpan di <strong>localStorage</strong> perangkat Anda.</li>
                <li data-i18n="privacyStorage2">Gambar yang diproses <strong>tidak disimpan</strong> secara permanen.</li>
            </ul>
            <h4 data-i18n="privacySecurityTitle">4. Keamanan</h4>
            <p data-i18n="privacySecurityDesc">Kami menggunakan enkripsi dan praktik keamanan standar untuk melindungi data Anda.</p>
            <h4 data-i18n="privacyRightsTitle">5. Hak Pengguna</h4>
            <ul>
                <li data-i18n="privacyRights1">Anda dapat menghapus semua data chat kapan saja.</li>
                <li data-i18n="privacyRights2">Anda dapat menonaktifkan akun dan menghapus data.</li>
                <li data-i18n="privacyRights3">Anda dapat mengekspor data chat Anda.</li>
            </ul>
            <h4 data-i18n="privacyContactTitle">6. Kontak</h4>
            <p data-i18n="privacyContactDesc">Jika ada pertanyaan tentang privasi, hubungi kami di: <strong>support@alovera.id</strong></p>
            `
        );
    });

    document.getElementById('helpBtn').addEventListener('click', function() {
        openModal(
            '<i class="fa-solid fa-circle-question"></i> <span data-i18n="helpModalTitle">Pusat Bantuan</span>',
            `
            <h4 data-i18n="helpQuickGuide">Panduan Cepat</h4>
            <div class="highlight-box">
                <strong data-i18n="helpChatTitle">Chat dengan AI</strong>
                <p data-i18n="helpChatDesc">Ketik pesan di kolom input dan tekan Enter atau klik tombol kirim.</p>
            </div>
            <div class="highlight-box">
                <strong data-i18n="helpImageTitle">Buat Gambar</strong>
                <p data-i18n="helpImageDesc">Ketik "buatkan gambar [deskripsi]" atau gunakan menu Tools (+).</p>
            </div>
            <div class="highlight-box">
                <strong data-i18n="helpSearchTitle">Cari di Google</strong>
                <p data-i18n="helpSearchDesc">Klik ikon Google di menu Tools (+) untuk mencari informasi.</p>
            </div>
            <h4 data-i18n="helpFaqTitle">❓ FAQ</h4>
            <p><strong data-i18n="helpFaq1Q">Q: Apakah Alovera AI gratis?</strong><br><span data-i18n="helpFaq1A">A: Ya, Alovera AI sepenuhnya gratis untuk digunakan.</span></p>
            <p><strong data-i18n="helpFaq2Q">Q: Di mana data chat saya disimpan?</strong><br><span data-i18n="helpFaq2A">A: Data chat disimpan secara lokal di perangkat Anda.</span></p>
            <p><strong data-i18n="helpFaq3Q">Q: Bisakah saya menghapus riwayat chat?</strong><br><span data-i18n="helpFaq3A">A: Ya, buka Pengaturan > Penyimpanan > Hapus Semua.</span></p>
            <p><strong data-i18n="helpFaq4Q">Q: Bagaimana cara mengganti tema?</strong><br><span data-i18n="helpFaq4A">A: Buka Pengaturan > Tampilan > Mode Gelap/Terang.</span></p>
            <h4 data-i18n="helpContactTitle">Hubungi Kami</h4>
            <p data-i18n="helpContactEmail">Email: <strong>support@alovera.id</strong></p>
            <p data-i18n="helpContactResponse">Response time: 1x24 jam</p>
            `
        );
    });

    document.getElementById('aboutBtn').addEventListener('click', function() {
        openModal(
            '<i class="fa-solid fa-info-circle"></i> <span data-i18n="aboutModalTitle">Tentang Aplikasi</span>',
            `
            <div class="app-icon-large">
                <i class="fa-solid fa-infinity"></i>
            </div>
            <div class="app-name-large">Alovera AI</div>
            <div class="app-version">
                <span class="version-tag">v3.0.0</span>
                <br><br>
                <span style="color:var(--text-muted);">Build 2025.01.01</span>
            </div>
            <h4 data-i18n="aboutAppTitle">Tentang Alovera AI</h4>
            <p data-i18n="aboutAppDesc">Alovera AI adalah aplikasi chat AI canggih dengan fitur lengkap untuk percakapan, generasi gambar, dan pencarian informasi.</p>
            <h4 data-i18n="aboutFeaturesTitle">Fitur Utama</h4>
            <ul>
                <li data-i18n="aboutFeature1">Chat AI dengan karakter unik</li>
                <li data-i18n="aboutFeature2">Generasi gambar AI</li>
                <li data-i18n="aboutFeature3">Hapus background & perjelas gambar</li>
                <li data-i18n="aboutFeature4">Pencarian Google terintegrasi</li>
                <li data-i18n="aboutFeature5">Mode gelap/terang</li>
            </ul>
            <h4 data-i18n="aboutDevTitle">Pengembang</h4>
            <p data-i18n="aboutDevDesc">Dikembangkan oleh <strong>Alovera AI Team</strong></p>
            <p data-i18n="aboutDevMission">Dedicated to creating the best AI chat experience.</p>
            <h4 data-i18n="aboutLicenseTitle">Lisensi</h4>
            <p data-i18n="aboutLicenseDesc">Hak Cipta &copy; 2025 Alovera AI. All rights reserved.</p>
            <p data-i18n="aboutLove">Dibangun dengan ❤️ untuk Indonesia.</p>
            <h4 data-i18n="aboutCreditsTitle">Kredit</h4>
            <ul>
                <li>Pollinations.ai - API Chat & Gambar AI</li>
                <li>Supabase - Database & Autentikasi</li>
                <li>Google Custom Search - Pencarian</li>
                <li>Remove.bg - Hapus background</li>
            </ul>
            `
        );
    });