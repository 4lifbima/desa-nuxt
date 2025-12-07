<template>
  <div>
    <!-- Navigation -->
    <nav class="fixed w-full z-50 transition-all duration-300 glass" id="navbar">
      <div class="container mx-auto px-8 md:px-12 lg:px-24 py-5">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 group relative z-50">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-neon group-hover:scale-105 transition-transform rotate-3 group-hover:rotate-0">
              <Activity class="w-6 h-6" />
            </div>
            <span class="text-xl font-bold tracking-tight">Desa<span class="text-primary">Maju</span></span>
          </NuxtLink>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-10">
            <NuxtLink to="/#profil" class="text-sm font-medium hover:text-primary transition-colors">Profil</NuxtLink>
            <NuxtLink to="/#layanan" class="text-sm font-medium hover:text-primary transition-colors">Layanan</NuxtLink>
            <NuxtLink to="/#berita" class="text-sm font-medium hover:text-primary transition-colors">Berita</NuxtLink>
            <NuxtLink to="/#galeri" class="text-sm font-medium hover:text-primary transition-colors">Galeri</NuxtLink>
            
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

            <NuxtLink to="/#kontak" class="bg-primary text-white px-7 py-3 rounded-lg font-medium text-sm hover:shadow-neon hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5">
              Akses Warga
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden bg-gray-50 dark:bg-dark-surface text-gray-500 dark:text-white relative z-50 transition-colors p-3 border-2 border-slate-200 dark:border-white/10 rounded-2xl"
            @click="openSidebar"
          >
            <Menu class="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Sidebar -->
    <div 
      v-show="sidebarOpen"
      class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      @click="closeSidebar"
    ></div>

    <div 
      class="fixed top-0 right-0 z-[70] w-[280px] h-full bg-white dark:bg-dark-surface shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col border-l border-gray-100 dark:border-white/5"
      :class="sidebarOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-6 flex justify-between items-center border-b border-gray-100 dark:border-white/5">
        <span class="text-lg font-bold tracking-tight">Menu <span class="text-primary">Utama</span></span>
        <button @click="closeSidebar" class="text-gray-500 hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/5">
          <X class="w-6 h-6" />
        </button>
      </div>
      <div class="flex-1 overflow-y-auto py-6 px-4">
        <nav class="space-y-2">
          <NuxtLink to="/" @click="closeSidebar" class="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-white/5 hover:text-primary rounded-xl transition-all font-medium">
            <Home class="w-5 h-5 text-primary/80" />
            Beranda
          </NuxtLink>
          <NuxtLink to="/#berita" @click="closeSidebar" class="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-white/5 hover:text-primary rounded-xl transition-all font-medium">
            <Newspaper class="w-5 h-5 text-primary/80" />
            Berita
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <main class="pt-24 pb-20 min-h-screen">
      <article v-if="berita" class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        <!-- Breadcrumb -->
        <nav class="mb-8 reveal">
          <ol class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
            <li>
              <NuxtLink to="/" class="hover:text-primary transition-colors flex items-center gap-1">
                <Home class="w-4 h-4" /> Beranda
              </NuxtLink>
            </li>
            <li><ChevronRight class="w-4 h-4" /></li>
            <li>
              <NuxtLink to="/#berita" class="hover:text-primary transition-colors">Berita</NuxtLink>
            </li>
            <li><ChevronRight class="w-4 h-4" /></li>
            <li class="text-gray-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none">{{ berita.title }}</li>
          </ol>
        </nav>

        <!-- Article Header -->
        <header class="mb-10 reveal">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
               :class="categoryClass">
            {{ berita.category }}
          </div>
          
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            {{ berita.title }}
          </h1>
          
          <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">{{ berita.author }}</p>
                <p class="text-xs">Penulis</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <Calendar class="w-5 h-5 text-primary" />
              <span>{{ berita.date }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Clock class="w-5 h-5 text-primary" />
              <span>{{ berita.readTime }} baca</span>
            </div>
          </div>
        </header>

        <!-- Featured Image -->
        <div class="mb-10 reveal" style="transition-delay: 100ms;">
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
            <img 
              :src="berita.image" 
              :alt="berita.title"
              class="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            >
          </div>
        </div>

        <!-- Article Content -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <!-- Main Content -->
          <div class="lg:col-span-8 reveal" style="transition-delay: 200ms;">
            <div 
              class="prose prose-lg dark:prose-invert max-w-none
                     prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                     prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
                     prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                     prose-ul:my-6 prose-ul:space-y-2
                     prose-li:text-gray-600 dark:prose-li:text-gray-300
                     prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-dark-surface prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-blockquote:my-8"
              v-html="berita.content"
            ></div>

            <!-- Share Section -->
            <div class="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
              <h3 class="font-bold text-lg mb-4 flex items-center gap-2">
                <Share2 class="w-5 h-5 text-primary" /> Bagikan Artikel
              </h3>
              <div class="flex gap-3">
                <button class="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook class="w-5 h-5" />
                </button>
                <button class="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Twitter class="w-5 h-5" />
                </button>
                <button class="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors">
                  <MessageCircle class="w-5 h-5" />
                </button>
                <button class="w-12 h-12 rounded-xl bg-gray-200 dark:bg-dark-surface text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-white/10 transition-colors">
                  <Link2 class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 reveal" style="transition-delay: 300ms;">
            <!-- Related News -->
            <div class="sticky top-28">
              <h3 class="font-bold text-xl mb-6 flex items-center gap-2 border-l-4 border-primary pl-4">
                <Newspaper class="w-5 h-5 text-primary" /> Berita Lainnya
              </h3>
              
              <div class="space-y-6">
                <NuxtLink 
                  v-for="related in relatedBerita" 
                  :key="related.id"
                  :to="`/berita/${related.slug}`"
                  class="group block bg-gray-50 dark:bg-dark-surface rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  <div class="aspect-video overflow-hidden">
                    <img 
                      :src="related.image" 
                      :alt="related.title"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                  </div>
                  <div class="p-4">
                    <span class="text-xs font-bold text-primary uppercase tracking-wider">{{ related.category }}</span>
                    <h4 class="font-bold mt-2 group-hover:text-primary transition-colors line-clamp-2">{{ related.title }}</h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-2">
                      <Calendar class="w-3 h-3" /> {{ related.date }}
                    </p>
                  </div>
                </NuxtLink>
              </div>

              <!-- Back Button -->
              <NuxtLink 
                to="/#berita" 
                class="mt-8 w-full py-4 bg-primary text-white text-center rounded-xl font-bold shadow-neon hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft class="w-5 h-5" /> Kembali ke Berita
              </NuxtLink>
            </div>
          </aside>
        </div>
      </article>

      <!-- Not Found -->
      <div v-else class="container mx-auto px-8 md:px-12 lg:px-24 text-center py-20">
        <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileX class="w-12 h-12 text-primary" />
        </div>
        <h1 class="text-3xl font-bold mb-4">Berita Tidak Ditemukan</h1>
        <p class="text-gray-500 dark:text-gray-400 mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
        <NuxtLink 
          to="/#berita" 
          class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-neon hover:bg-primary-dark transition-all"
        >
          <ArrowLeft class="w-5 h-5" /> Kembali ke Berita
        </NuxtLink>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-black text-white py-12 border-t border-white/10">
      <div class="container mx-auto px-8 md:px-12 lg:px-24">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <Activity class="w-6 h-6" />
            </div>
            <span class="text-xl font-bold tracking-tight">Desa<span class="text-primary">Maju</span></span>
          </NuxtLink>
          <p class="text-gray-500 text-sm">© 2023 Pemerintah Desa Maju. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { 
  Activity, Menu, X, Home, Newspaper, User, Calendar, Clock, 
  ChevronRight, Share2, Facebook, Twitter, MessageCircle, Link2,
  ArrowLeft, FileX
} from 'lucide-vue-next'
import { getBeritaBySlug, getRelatedBerita } from '~/data/berita'

const route = useRoute()
const { isDark, toggleDarkMode } = useDarkMode()
const { isOpen: sidebarOpen, openSidebar, closeSidebar } = useSidebar()
const { initRevealAnimations, initNavbarScroll } = useScrollAnimation()

const slug = computed(() => route.params.slug as string)
const berita = computed(() => getBeritaBySlug(slug.value))
const relatedBerita = computed(() => getRelatedBerita(slug.value, 3))

const categoryClass = computed(() => {
  const category = berita.value?.category.toLowerCase()
  switch (category) {
    case 'pembangunan':
      return 'bg-primary/10 text-primary border border-primary/20'
    case 'ekonomi':
      return 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
    case 'sosial':
      return 'bg-green-500/10 text-green-500 border border-green-500/20'
    default:
      return 'bg-gray-500/10 text-gray-500 border border-gray-500/20'
  }
})

// Get the base URL for absolute image paths
const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public.siteUrl || 'https://desamaju.vercel.app'

// Full URL for current page
const currentUrl = computed(() => `${baseUrl}/berita/${slug.value}`)

// Full URL for image (convert relative to absolute)
const ogImage = computed(() => {
  if (!berita.value?.image) return `${baseUrl}/berita/center-point.jpg`
  // If image starts with http, use as is, otherwise prepend baseUrl
  if (berita.value.image.startsWith('http')) return berita.value.image
  return `${baseUrl}${berita.value.image}`
})

// Open Graph and Twitter meta tags for social sharing
useSeoMeta({
  title: () => berita.value ? `${berita.value.title} - Desa Digital` : 'Berita Tidak Ditemukan',
  description: () => berita.value?.excerpt || 'Berita terkini dari Desa Maju',
  
  // Open Graph (Facebook, WhatsApp, LinkedIn, etc.)
  ogTitle: () => berita.value?.title || 'Berita Desa Maju',
  ogDescription: () => berita.value?.excerpt || 'Berita terkini dari Desa Maju',
  ogImage: () => ogImage.value,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogUrl: () => currentUrl.value,
  ogType: 'article',
  ogSiteName: 'Desa Digital - Desa Maju',
  ogLocale: 'id_ID',
  
  // Article specific
  articlePublishedTime: () => berita.value?.date || '',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: () => berita.value?.title || 'Berita Desa Maju',
  twitterDescription: () => berita.value?.excerpt || 'Berita terkini dari Desa Maju',
  twitterImage: () => ogImage.value,
  twitterSite: '@desamaju',
  twitterCreator: '@desamaju',
})

onMounted(() => {
  initRevealAnimations()
  initNavbarScroll()
})

watch(slug, () => {
  nextTick(() => {
    initRevealAnimations()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})
</script>
