<template>
  <!-- Navigation -->
  <nav class="fixed w-full z-50 transition-all duration-300 glass" id="navbar">
    <div class="container mx-auto px-8 md:px-12 lg:px-24 py-5">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group relative z-50">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-neon group-hover:scale-105 transition-transform rotate-3 group-hover:rotate-0">
            <Activity class="w-6 h-6" />
          </div>
          <span class="text-xl font-bold tracking-tight">Desa<span class="text-primary">Maju</span></span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-10">
          <a href="#profil" class="text-sm font-medium hover:text-primary transition-colors">Profil</a>
          <a href="#layanan" class="text-sm font-medium hover:text-primary transition-colors">Layanan</a>
          <a href="#berita" class="text-sm font-medium hover:text-primary transition-colors">Berita</a>
          <a href="#galeri" class="text-sm font-medium hover:text-primary transition-colors">Galeri</a>
          
          <!-- Dark Mode Toggle -->
          <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <input 
              type="checkbox" 
              id="toggle" 
              :checked="isDark"
              @change="toggleDarkMode($event.target.checked)"
              class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-all duration-300 z-10"
            />
            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer dark:bg-gray-700"></label>
          </div>

          <a href="#kontak" class="bg-primary text-white px-7 py-3 rounded-lg font-medium text-sm hover:shadow-neon hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5">
            Akses Warga
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden bg-gray-50 text-gray-500 dark:text-white relative z-50 transition-colors p-3 border-2 border-slate-200 rounded-2xl"
          @click="openSidebar"
        >
          <Menu class="w-6 h-6" />
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Sidebar & Overlay -->
  <div 
    v-show="sidebarOpen"
    class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
    :class="sidebarOpen ? 'opacity-100' : 'opacity-0'"
    @click="closeSidebar"
  ></div>

  <div 
    class="fixed top-0 right-0 z-[70] w-[280px] h-full bg-white dark:bg-dark-surface shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col border-l border-gray-100 dark:border-white/5"
    :class="sidebarOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Sidebar Header -->
    <div class="p-6 flex justify-between items-center border-b border-gray-100 dark:border-white/5">
      <span class="text-lg font-bold tracking-tight">Menu <span class="text-primary">Utama</span></span>
      <button 
        @click="closeSidebar"
        class="text-gray-500 hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
      >
        <X class="w-6 h-6" />
      </button>
    </div>

    <!-- Sidebar Content -->
    <div class="flex-1 overflow-y-auto py-6 px-4">
      <nav class="space-y-2">
        <a href="#profil" @click="closeSidebar" class="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-white/5 hover:text-primary rounded-xl transition-all font-medium">
          <User class="w-5 h-5 text-primary/80" />
          Profil Desa
        </a>
        <a href="#layanan" @click="closeSidebar" class="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-white/5 hover:text-primary rounded-xl transition-all font-medium">
          <Briefcase class="w-5 h-5 text-primary/80" />
          Layanan
        </a>
        <a href="#berita" @click="closeSidebar" class="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-white/5 hover:text-primary rounded-xl transition-all font-medium">
          <Newspaper class="w-5 h-5 text-primary/80" />
          Berita
        </a>
        <a href="#galeri" @click="closeSidebar" class="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-white/5 hover:text-primary rounded-xl transition-all font-medium">
          <ImageIcon class="w-5 h-5 text-primary/80" />
          Galeri
        </a>
      </nav>

      <div class="mt-8 px-4">
        <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
          <span class="text-sm font-medium flex items-center gap-2">
            <Moon class="w-4 h-4" /> Mode Gelap
          </span>
          <div class="relative inline-block w-12 align-middle select-none">
            <input 
              type="checkbox" 
              id="toggle-mobile"
              :checked="isDark"
              @change="toggleDarkMode($event.target.checked)"
              class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-all duration-300 z-10"
            />
            <label for="toggle-mobile" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer dark:bg-gray-700"></label>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar Footer -->
    <div class="p-6 border-t border-gray-100 dark:border-white/5">
      <a href="#kontak" @click="closeSidebar" class="block w-full py-3 bg-primary text-white text-center rounded-xl font-bold shadow-neon hover:bg-primary-dark transition-all">
        Masuk / Akses Warga
      </a>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
    <!-- Grid Background Pattern -->
    <div class="absolute inset-0 z-0 bg-grid"></div>
    
    <!-- Ambient Color Glows -->
    <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px]"></div>

    <!-- Main Content -->
    <div class="container mx-auto px-8 md:px-12 lg:px-24 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- Left Column: Content -->
        <div class="text-left order-2 lg:order-1 reveal">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Smart Village System v4.0
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Membangun Desa <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Lebih Cerdas.</span>
          </h1>
          
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
            Platform digital terintegrasi untuk administrasi, pelayanan publik, dan ekonomi desa. Efisien, transparan, dan akuntabel.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-5">
            <a href="#layanan" class="group px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-neon transition-all hover:bg-primary-dark hover:scale-[1.02] flex items-center justify-center gap-2">
              Layanan Warga <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#profil" class="px-8 py-4 rounded-lg font-bold border-2 border-gray-200 dark:border-white/10 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all flex items-center justify-center">
              Lihat Statistik
            </a>
          </div>

          <div class="mt-12 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-dark-base"></div>
              <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-dark-base"></div>
              <div class="w-8 h-8 rounded-full bg-gray-400 border-2 border-white dark:border-dark-base"></div>
            </div>
            <p>Dipercaya oleh <span class="text-primary font-bold">2,500+</span> warga.</p>
          </div>
        </div>

        <!-- Right Column: Image -->
        <div class="order-2 lg:order-2 relative reveal" style="transition-delay: 200ms;">
          <!-- Red Glow Behind Image -->
          <div class="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-90 animate-pulse-slow"></div>
          
          <!-- Main Image/Mockup -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-surface group perspective-1000">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" alt="Dashboard Desa" class="w-full h-auto object-cover opacity-95 group-hover:scale-105 transition-transform duration-700">
            
            <!-- Floating UI Card Overlay -->
            <div class="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                  <CheckCircle class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold text-sm">Surat Keterangan Usaha</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Status: <span class="text-green-500 font-semibold">Selesai (Baru Saja)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Icons -->
  <section class="py-20 bg-gray-50 dark:bg-dark-base relative border-y border-gray-100 dark:border-white/5">
    <div class="container mx-auto px-8 md:px-12 lg:px-24">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Box 1 -->
        <div class="p-8 rounded-xl bg-white dark:bg-dark-surface hover:bg-white dark:hover:bg-dark-surface transition-all duration-300 hover:shadow-card-hover border border-gray-100 dark:border-white/5 hover:border-primary/30 dark:hover:border-primary/30 group reveal">
          <div class="w-14 h-14 rounded-lg bg-red-50 dark:bg-red-900/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
            <Wifi class="w-7 h-7" />
          </div>
          <h3 class="text-lg font-bold mb-2">Internet Desa</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 lg:block hidden">Hotspot area publik gratis.</p>
        </div>
        <!-- Box 2 -->
        <div class="p-8 rounded-xl bg-white dark:bg-dark-surface hover:bg-white dark:hover:bg-dark-surface transition-all duration-300 hover:shadow-card-hover border border-gray-100 dark:border-white/5 hover:border-primary/30 dark:hover:border-primary/30 group reveal" style="transition-delay: 100ms;">
          <div class="w-14 h-14 rounded-lg bg-red-50 dark:bg-red-900/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
            <Smartphone class="w-7 h-7" />
          </div>
          <h3 class="text-lg font-bold mb-2">Aplikasi Mobile</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 lg:block hidden">Layanan dalam genggaman.</p>
        </div>
        <!-- Box 3 -->
        <div class="p-8 rounded-xl bg-white dark:bg-dark-surface hover:bg-white dark:hover:bg-dark-surface transition-all duration-300 hover:shadow-card-hover border border-gray-100 dark:border-white/5 hover:border-primary/30 dark:hover:border-primary/30 group reveal" style="transition-delay: 200ms;">
          <div class="w-14 h-14 rounded-lg bg-red-50 dark:bg-red-900/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
            <ShoppingBag class="w-7 h-7" />
          </div>
          <h3 class="text-lg font-bold mb-2">Pasar Digital</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 lg:block hidden">E-Commerce untuk UMKM.</p>
        </div>
        <!-- Box 4 -->
        <div class="p-8 rounded-xl bg-white dark:bg-dark-surface hover:bg-white dark:hover:bg-dark-surface transition-all duration-300 hover:shadow-card-hover border border-gray-100 dark:border-white/5 hover:border-primary/30 dark:hover:border-primary/30 group reveal" style="transition-delay: 300ms;">
          <div class="w-14 h-14 rounded-lg bg-red-50 dark:bg-red-900/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
            <ShieldCheck class="w-7 h-7" />
          </div>
          <h3 class="text-lg font-bold mb-2">Keamanan</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 lg:block hidden">Sistem pantau 24 jam.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sambutan Kades -->
  <section class="py-24 bg-white dark:bg-dark-base overflow-hidden">
    <div class="container mx-auto px-8 md:px-12 lg:px-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div class="relative reveal">
          <div class="absolute inset-0 bg-primary translate-x-3 translate-y-3 rounded-2xl"></div>
          <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" alt="Kepala Desa" class="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white dark:border-dark-surface">
          <div class="absolute bottom-8 left-[-20px] bg-white dark:bg-dark-surface shadow-xl p-6 rounded-lg border-l-4 border-primary max-w-xs">
            <h4 class="text-xl font-bold text-gray-900 dark:text-white">Bpk. Wijaya Kusuma</h4>
            <p class="text-primary font-medium text-sm">Kepala Desa Periode 2023-2028</p>
          </div>
        </div>
        <div class="reveal" style="transition-delay: 200ms;">
          <span class="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Dari Meja Kepala Desa</span>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">Gotong Royong di <br>Era <span class="text-primary underline decoration-4 decoration-primary/30 underline-offset-4">Digital</span></h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            "Teknologi hanyalah alat. Jiwa dari desa ini tetaplah kebersamaan. Dengan sistem Desa Digital, kita memangkas birokrasi yang berbelit, transparansi anggaran, dan memudahkan warga mengakses hak-haknya tanpa terkecuali."
          </p>
          <div class="flex items-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" class="h-12 opacity-40 dark:invert">
            <div class="h-10 w-px bg-gray-300 dark:bg-gray-700"></div>
            <a href="#profil" class="text-primary font-bold hover:underline">Baca Profil Lengkap</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Profil Desa & Data -->
  <section id="profil" class="py-24 bg-gray-50 dark:bg-dark-surface relative">
    <div class="container mx-auto px-8 md:px-12 lg:px-24">
      <div class="text-center max-w-3xl mx-auto mb-20 reveal">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Mengenal Lebih Dekat</h2>
        <div class="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
        <p class="text-gray-500 dark:text-gray-400 text-lg">Harmoni antara tradisi leluhur dan kemajuan teknologi.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div class="bg-white dark:bg-dark-base border border-gray-100 dark:border-white/5 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 reveal group">
          <div class="mb-6 inline-flex p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-primary group-hover:scale-110 transition-transform">
            <BookOpen class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold mb-4">Sejarah</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Berdiri sejak tahun 1950, desa ini awalnya merupakan lumbung padi. Kini bertransformasi menjadi pusat inovasi agrikultur digital.
          </p>
        </div>
        <div class="bg-white dark:bg-dark-base border border-gray-100 dark:border-white/5 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 reveal group" style="transition-delay: 100ms;">
          <div class="mb-6 inline-flex p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-primary group-hover:scale-110 transition-transform">
            <Target class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold mb-4">Visi</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Terwujudnya Desa Mandiri yang Sejahtera, Cerdas, dan Berbudaya melalui penguatan ekonomi digital.
          </p>
        </div>
        <div class="bg-white dark:bg-dark-base border border-gray-100 dark:border-white/5 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 reveal group" style="transition-delay: 200ms;">
          <div class="mb-6 inline-flex p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-primary group-hover:scale-110 transition-transform">
            <Compass class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold mb-4">Misi</h3>
          <ul class="text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside text-sm">
            <li>Digitalisasi pelayanan publik.</li>
            <li>Pemberdayaan UMKM lokal.</li>
            <li>Peningkatan infrastruktur IT.</li>
          </ul>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 bg-black dark:bg-black rounded-3xl p-12 text-white relative overflow-hidden reveal border border-gray-800">
        <div class="absolute inset-0 bg-primary/10"></div>
        <div class="absolute inset-0 bg-grid opacity-20"></div>
        
        <div class="relative text-center z-10">
          <div class="text-4xl md:text-5xl font-bold mb-2 text-primary">3.5k</div>
          <div class="text-sm font-medium tracking-wider uppercase text-gray-400">Penduduk</div>
        </div>
        <div class="relative text-center z-10">
          <div class="text-4xl md:text-5xl font-bold mb-2 text-primary">450</div>
          <div class="text-sm font-medium tracking-wider uppercase text-gray-400">Kepala Keluarga</div>
        </div>
        <div class="relative text-center z-10">
          <div class="text-4xl md:text-5xl font-bold mb-2 text-primary">120</div>
          <div class="text-sm font-medium tracking-wider uppercase text-gray-400">UMKM Aktif</div>
        </div>
        <div class="relative text-center z-10">
          <div class="text-4xl md:text-5xl font-bold mb-2 text-primary">99%</div>
          <div class="text-sm font-medium tracking-wider uppercase text-gray-400">Tercover 4G</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Layanan Digital -->
  <section id="layanan" class="py-24 bg-white dark:bg-dark-base">
    <div class="container mx-auto px-8 md:px-12 lg:px-24">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
        <div class="max-w-2xl">
          <span class="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">E-Government</span>
          <h2 class="text-3xl md:text-4xl font-bold">Layanan Digital Terpadu</h2>
        </div>
        <a href="#" class="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
          Katalog Layanan <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <NuxtLink 
          v-for="(item, index) in layananListPreview" 
          :key="item.id"
          :to="`/layanan/${item.slug}`"
          class="group bg-gray-50 dark:bg-dark-surface p-8 rounded-2xl border border-transparent hover:border-primary/20 dark:hover:border-primary/20 hover:bg-white dark:hover:bg-black transition-all duration-300 hover:shadow-card-hover reveal block"
          :style="index > 0 ? `transition-delay: ${index * 100}ms;` : ''"
        >
          <div class="w-14 h-14 bg-white dark:bg-white/5 text-primary rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
            <component :is="getLayananIcon(item.icon)" class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-bold mb-3">{{ item.title }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">{{ item.description }}</p>
          <span class="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Akses Layanan <ChevronRight class="w-4 h-4 ml-1" /></span>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Berita & Agenda -->
  <section id="berita" class="py-24 bg-gray-50 dark:bg-dark-surface border-t border-gray-200 dark:border-white/5">
    <div class="container mx-auto px-8 md:px-12 lg:px-24">
      <div class="flex flex-col lg:flex-row gap-16">
        <!-- Berita -->
        <div class="lg:w-3/4">
          <div class="flex justify-between items-end mb-12 reveal">
            <h2 class="text-3xl font-bold border-l-4 border-primary pl-4">Kabar Desa Terkini</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Dynamic News Items -->
            <NuxtLink 
              v-for="(item, index) in beritaListPreview" 
              :key="item.id"
              :to="`/berita/${item.slug}`"
              class="group cursor-pointer reveal block"
              :style="index > 0 ? 'transition-delay: 100ms;' : ''"
            >
              <article>
                <div class="rounded-xl overflow-hidden mb-6 aspect-video relative shadow-md">
                  <img :src="item.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" :alt="item.title">
                  <div 
                    class="absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider"
                    :class="item.category === 'Pembangunan' ? 'bg-primary' : item.category === 'Ekonomi' ? 'bg-black' : 'bg-green-600'"
                  >
                    {{ item.category }}
                  </div>
                </div>
                <div class="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar class="w-3 h-3" /> {{ item.date }}
                  <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{{ item.author }}</span>
                </div>
                <h3 class="text-xl font-bold leading-snug group-hover:text-primary transition-colors mb-3">{{ item.title }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{{ item.excerpt }}</p>
              </article>
            </NuxtLink>
          </div>

        </div>

        <!-- Agenda -->
        <div class="lg:w-1/4">
          <h2 class="text-2xl font-bold mb-8 reveal border-l-4 border-gray-800 dark:border-white pl-4">Agenda Kegiatan</h2>
          <div class="space-y-6">
            <!-- Dynamic Agenda Items -->
            <NuxtLink 
              v-for="(item, index) in agendaListPreview" 
              :key="item.id"
              :to="`/agenda/${item.slug}`"
              class="block bg-white dark:bg-dark-base border border-gray-200 dark:border-white/10 p-6 rounded-xl hover:border-primary transition-colors reveal relative overflow-hidden group"
              :style="index > 0 ? `transition-delay: ${index * 100}ms;` : ''"
            >
              <div class="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/10"></div>
              <div class="flex items-center gap-3 text-primary font-bold mb-3 text-xs uppercase tracking-wider">
                <Clock class="w-3 h-3" /> {{ item.date }}
              </div>
              <h4 class="font-bold mb-2 text-lg group-hover:text-primary transition-colors">{{ item.title }}</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ item.location }}</p>
              <div class="flex items-center gap-2 text-xs text-gray-400 border-t border-gray-100 dark:border-white/5 pt-3">
                <User class="w-3 h-3" /> {{ item.organizer }}
              </div>
            </NuxtLink>

            <!-- CTA Card -->
            <div class="bg-primary text-white p-6 rounded-xl reveal shadow-lg relative overflow-hidden group" style="transition-delay: 200ms;">
              <div class="absolute -right-4 -bottom-4 text-white/10 rotate-12">
                <CalendarIcon class="w-24 h-24" />
              </div>
              <h4 class="font-bold text-xl mb-2 relative z-10">Lihat Semua Agenda</h4>
              <p class="text-white/80 text-sm mb-4 relative z-10">Jangan lewatkan kegiatan penting desa bulan ini.</p>
              <span class="inline-flex items-center text-sm font-bold bg-white text-primary px-4 py-2 rounded-lg relative z-10">Buka Kalender</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="galeri" class="py-24 bg-white dark:bg-dark-base">
    <div class="container mx-auto px-8 md:px-12 lg:px-24">
      <div class="text-center mb-16 reveal">
        <span class="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Dokumentasi</span>
        <h2 class="text-3xl font-bold">Potret Kehidupan Desa</h2>
      </div>
      
      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 reveal">
        <div class="break-inside-avoid rounded-xl overflow-hidden shadow-lg group relative">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <Instagram class="text-white w-8 h-8" />
          </div>
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" class="w-full h-auto group-hover:scale-110 transition-transform duration-700" alt="Galeri">
        </div>
        <div class="break-inside-avoid rounded-xl overflow-hidden shadow-lg group relative">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <Instagram class="text-white w-8 h-8" />
          </div>
          <img src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80&w=800" class="w-full h-auto group-hover:scale-110 transition-transform duration-700" alt="Galeri">
        </div>
        <div class="break-inside-avoid rounded-xl overflow-hidden shadow-lg group relative">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <Instagram class="text-white w-8 h-8" />
          </div>
          <img src="https://images.unsplash.com/photo-1590610994380-6b668d27a6f2?auto=format&fit=crop&q=80&w=800" class="w-full h-auto group-hover:scale-110 transition-transform duration-700" alt="Galeri">
        </div>
        <div class="break-inside-avoid rounded-xl overflow-hidden shadow-lg group relative">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <Instagram class="text-white w-8 h-8" />
          </div>
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800" class="w-full h-auto group-hover:scale-110 transition-transform duration-700" alt="Galeri">
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer id="kontak" class="bg-black text-white pt-24 pb-12 border-t border-white/10">
    <div class="container mx-auto px-8 md:px-12 lg:px-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <!-- Branding -->
        <div>
          <a href="#" class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <Activity class="w-6 h-6" />
            </div>
            <span class="text-2xl font-bold tracking-tight">Desa<span class="text-primary">Maju</span></span>
          </a>
          <p class="text-gray-400 mb-8 leading-relaxed text-sm">
            Mewujudkan tata kelola desa yang transparan, akuntabel, dan partisipatif melalui inovasi teknologi informasi.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
              <Twitter class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Kontak -->
        <div>
          <h4 class="text-lg font-bold mb-8 text-white">Hubungi Kami</h4>
          <ul class="space-y-6">
            <li class="flex items-start gap-4 text-gray-400 text-sm">
              <div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 text-primary">
                <MapPin class="w-4 h-4" />
              </div>
              <span>Jl. Merdeka Raya No. 45,<br>Kec. Digital, Kab. Maju Jaya</span>
            </li>
            <li class="flex items-center gap-4 text-gray-400 text-sm">
              <div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 text-primary">
                <Phone class="w-4 h-4" />
              </div>
              <span>(021) 1234-5678</span>
            </li>
            <li class="flex items-center gap-4 text-gray-400 text-sm">
              <div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 text-primary">
                <Mail class="w-4 h-4" />
              </div>
              <span>admin@desamaju.id</span>
            </li>
          </ul>
        </div>

        <!-- Tautan Cepat -->
        <div>
          <h4 class="text-lg font-bold mb-8 text-white">Menu Utama</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="#" class="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight class="w-3 h-3" /> Profil Desa</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight class="w-3 h-3" /> Layanan Mandiri</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight class="w-3 h-3" /> Transparansi APBDes</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight class="w-3 h-3" /> Peta Wisata</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-lg font-bold mb-8 text-white">Langganan Info</h4>
          <p class="text-gray-400 mb-6 text-sm">Berita desa terbaru langsung ke inbox Anda.</p>
          <form class="flex flex-col gap-3">
            <input type="email" placeholder="Email Anda..." class="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-sm text-white transition-colors">
            <button type="button" class="px-4 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors text-sm shadow-neon">Daftar Sekarang</button>
          </form>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-sm">© 2023 Pemerintah Desa Maju. Hak Cipta Dilindungi.</p>
        <div class="flex gap-8 text-sm text-gray-500">
          <a href="#" class="hover:text-primary">Privasi</a>
          <a href="#" class="hover:text-primary">Ketentuan</a>
          <a href="#" class="hover:text-primary">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { 
  Activity, Menu, X, User, Briefcase, Newspaper, Moon, ArrowRight, 
  CheckCircle, Wifi, Smartphone, ShoppingBag, ShieldCheck, BookOpen, 
  Target, Compass, FileText, Map, BarChart2, Megaphone, ChevronRight,
  Calendar, Clock, Instagram, Facebook, Twitter, MapPin, Phone, Mail,
  Image as ImageIcon, Calendar as CalendarIcon
} from 'lucide-vue-next'
import { beritaList } from '~/data/berita'
import { layananList } from '~/data/layanan'
import { agendaList } from '~/data/agenda'

const { isDark, toggleDarkMode } = useDarkMode()
const { isOpen: sidebarOpen, openSidebar, closeSidebar } = useSidebar()
const { initRevealAnimations, initNavbarScroll } = useScrollAnimation()

// Data previews
const beritaListPreview = computed(() => beritaList.slice(0, 4))
const layananListPreview = computed(() => layananList.slice(0, 4))
const agendaListPreview = computed(() => agendaList.slice(0, 2))

// Icon mapping for layanan
const layananIconMap: Record<string, any> = { FileText, Map, BarChart2, Megaphone }
const getLayananIcon = (iconName: string) => layananIconMap[iconName] || FileText

onMounted(() => {
  initRevealAnimations()
  initNavbarScroll()
})
</script>

