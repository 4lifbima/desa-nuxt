<template>
  <div>
    <!-- Navigation -->
    <nav class="fixed w-full z-50 transition-all duration-300 glass" id="navbar">
      <div class="container mx-auto px-8 md:px-12 lg:px-24 py-5">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="flex items-center gap-3 group relative z-50">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-neon group-hover:scale-105 transition-transform rotate-3 group-hover:rotate-0">
              <Activity class="w-6 h-6" />
            </div>
            <span class="text-xl font-bold tracking-tight">Desa<span class="text-primary">Maju</span></span>
          </NuxtLink>

          <div class="hidden md:flex items-center gap-10">
            <NuxtLink to="/#profil" class="text-sm font-medium hover:text-primary transition-colors">Profil</NuxtLink>
            <NuxtLink to="/#layanan" class="text-sm font-medium hover:text-primary transition-colors">Layanan</NuxtLink>
            <NuxtLink to="/#berita" class="text-sm font-medium hover:text-primary transition-colors">Berita</NuxtLink>
            <NuxtLink to="/#galeri" class="text-sm font-medium hover:text-primary transition-colors">Galeri</NuxtLink>
            
            <div class="relative inline-block w-12 mr-2 align-middle select-none">
              <input type="checkbox" id="toggle" :checked="isDark" @change="toggleDarkMode($event.target.checked)"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer transition-all duration-300 z-10" />
              <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer dark:bg-gray-700"></label>
            </div>

            <NuxtLink to="/#kontak" class="bg-primary text-white px-7 py-3 rounded-lg font-medium text-sm hover:shadow-neon hover:bg-primary-dark transition-all">
              Akses Warga
            </NuxtLink>
          </div>

          <button class="md:hidden bg-gray-50 dark:bg-dark-surface text-gray-500 dark:text-white p-3 border-2 border-slate-200 dark:border-white/10 rounded-2xl" @click="openSidebar">
            <Menu class="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Sidebar -->
    <div v-show="sidebarOpen" class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" @click="closeSidebar"></div>
    <div class="fixed top-0 right-0 z-[70] w-[280px] h-full bg-white dark:bg-dark-surface shadow-2xl transform transition-transform duration-300 flex flex-col border-l border-gray-100 dark:border-white/5"
         :class="sidebarOpen ? 'translate-x-0' : 'translate-x-full'">
      <div class="p-6 flex justify-between items-center border-b border-gray-100 dark:border-white/5">
        <span class="text-lg font-bold">Menu <span class="text-primary">Utama</span></span>
        <button @click="closeSidebar" class="text-gray-500 hover:text-primary p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/5">
          <X class="w-6 h-6" />
        </button>
      </div>
      <div class="flex-1 overflow-y-auto py-6 px-4">
        <nav class="space-y-2">
          <NuxtLink to="/" @click="closeSidebar" class="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-white/5 hover:text-primary rounded-xl font-medium">
            <Home class="w-5 h-5 text-primary/80" /> Beranda
          </NuxtLink>
          <NuxtLink to="/#berita" @click="closeSidebar" class="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-white/5 hover:text-primary rounded-xl font-medium">
            <CalendarDays class="w-5 h-5 text-primary/80" /> Agenda
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <main class="pt-24 pb-20 min-h-screen">
      <article v-if="agenda" class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        <!-- Breadcrumb -->
        <nav class="mb-8 reveal">
          <ol class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
            <li><NuxtLink to="/" class="hover:text-primary flex items-center gap-1"><Home class="w-4 h-4" /> Beranda</NuxtLink></li>
            <li><ChevronRight class="w-4 h-4" /></li>
            <li><NuxtLink to="/#berita" class="hover:text-primary">Agenda</NuxtLink></li>
            <li><ChevronRight class="w-4 h-4" /></li>
            <li class="text-gray-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none">{{ agenda.title }}</li>
          </ol>
        </nav>

        <!-- Header -->
        <header class="mb-10 reveal">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" :class="categoryClass">
            {{ agenda.category }}
          </div>
          
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">{{ agenda.title }}</h1>
          
          <!-- Event Info Cards -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-50 dark:bg-dark-surface p-4 rounded-xl border border-gray-100 dark:border-white/5">
              <div class="flex items-center gap-2 text-primary mb-2">
                <Calendar class="w-5 h-5" />
                <span class="text-xs font-bold uppercase">Tanggal</span>
              </div>
              <p class="font-semibold text-sm">{{ agenda.date }}</p>
            </div>
            <div class="bg-gray-50 dark:bg-dark-surface p-4 rounded-xl border border-gray-100 dark:border-white/5">
              <div class="flex items-center gap-2 text-primary mb-2">
                <Clock class="w-5 h-5" />
                <span class="text-xs font-bold uppercase">Waktu</span>
              </div>
              <p class="font-semibold text-sm">{{ agenda.time }}</p>
            </div>
            <div class="bg-gray-50 dark:bg-dark-surface p-4 rounded-xl border border-gray-100 dark:border-white/5">
              <div class="flex items-center gap-2 text-primary mb-2">
                <MapPin class="w-5 h-5" />
                <span class="text-xs font-bold uppercase">Lokasi</span>
              </div>
              <p class="font-semibold text-sm">{{ agenda.location }}</p>
            </div>
            <div class="bg-gray-50 dark:bg-dark-surface p-4 rounded-xl border border-gray-100 dark:border-white/5">
              <div class="flex items-center gap-2 text-primary mb-2">
                <User class="w-5 h-5" />
                <span class="text-xs font-bold uppercase">Penyelenggara</span>
              </div>
              <p class="font-semibold text-sm">{{ agenda.organizer }}</p>
            </div>
          </div>
        </header>

        <!-- Featured Image -->
        <div v-if="agenda.image" class="mb-10 reveal" style="transition-delay: 100ms;">
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
            <img :src="agenda.image" :alt="agenda.title" class="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover">
          </div>
        </div>

        <!-- Content -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div class="lg:col-span-8 reveal" style="transition-delay: 200ms;">
            <div class="prose prose-lg dark:prose-invert max-w-none
                        prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
                        prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-ul:my-6 prose-ul:space-y-2 prose-ol:my-6 prose-ol:space-y-2
                        prose-li:text-gray-600 dark:prose-li:text-gray-300
                        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-dark-surface prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:italic"
                 v-html="agenda.content"></div>

            <!-- Share Section -->
            <div class="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
              <h3 class="font-bold text-lg mb-4 flex items-center gap-2">
                <Share2 class="w-5 h-5 text-primary" /> Bagikan Agenda
              </h3>
              <div class="flex gap-3">
                <button class="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook class="w-5 h-5" /></button>
                <button class="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"><Twitter class="w-5 h-5" /></button>
                <button class="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"><MessageCircle class="w-5 h-5" /></button>
                <button class="w-12 h-12 rounded-xl bg-gray-200 dark:bg-dark-surface text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-white/10 transition-colors"><Link2 class="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 reveal" style="transition-delay: 300ms;">
            <div class="sticky top-28">
              <h3 class="font-bold text-xl mb-6 flex items-center gap-2 border-l-4 border-primary pl-4">
                <CalendarDays class="w-5 h-5 text-primary" /> Agenda Lainnya
              </h3>
              
              <div class="space-y-4">
                <NuxtLink v-for="related in relatedAgenda" :key="related.id" :to="`/agenda/${related.slug}`"
                  class="group block bg-gray-50 dark:bg-dark-surface p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all">
                  <div class="flex items-center gap-2 text-primary font-bold mb-2 text-xs uppercase">
                    <Clock class="w-3 h-3" /> {{ related.date }}
                  </div>
                  <h4 class="font-bold group-hover:text-primary transition-colors line-clamp-2">{{ related.title }}</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                    <MapPin class="w-3 h-3" /> {{ related.location }}
                  </p>
                </NuxtLink>
              </div>

              <NuxtLink to="/#berita" class="mt-8 w-full py-4 bg-primary text-white text-center rounded-xl font-bold shadow-neon hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                <ArrowLeft class="w-5 h-5" /> Kembali
              </NuxtLink>
            </div>
          </aside>
        </div>
      </article>

      <!-- Not Found -->
      <div v-else class="container mx-auto px-8 md:px-12 lg:px-24 text-center py-20">
        <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CalendarX class="w-12 h-12 text-primary" />
        </div>
        <h1 class="text-3xl font-bold mb-4">Agenda Tidak Ditemukan</h1>
        <p class="text-gray-500 dark:text-gray-400 mb-8">Maaf, agenda yang Anda cari tidak tersedia.</p>
        <NuxtLink to="/#berita" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-neon hover:bg-primary-dark transition-all">
          <ArrowLeft class="w-5 h-5" /> Kembali
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
            <span class="text-xl font-bold">Desa<span class="text-primary">Maju</span></span>
          </NuxtLink>
          <p class="text-gray-500 text-sm">© 2023 Pemerintah Desa Maju. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { 
  Activity, Menu, X, Home, Calendar, Clock, MapPin, User, ChevronRight, 
  Share2, Facebook, Twitter, MessageCircle, Link2, ArrowLeft, CalendarDays, CalendarX
} from 'lucide-vue-next'
import { getAgendaBySlug, getRelatedAgenda } from '~/data/agenda'

const route = useRoute()
const { isDark, toggleDarkMode } = useDarkMode()
const { isOpen: sidebarOpen, openSidebar, closeSidebar } = useSidebar()
const { initRevealAnimations, initNavbarScroll } = useScrollAnimation()

const slug = computed(() => route.params.slug as string)
const agenda = computed(() => getAgendaBySlug(slug.value))
const relatedAgenda = computed(() => getRelatedAgenda(slug.value, 3))

const categoryClass = computed(() => {
  const category = agenda.value?.category.toLowerCase()
  switch (category) {
    case 'pemerintahan': return 'bg-primary/10 text-primary border border-primary/20'
    case 'kesehatan': return 'bg-green-500/10 text-green-500 border border-green-500/20'
    case 'edukasi': return 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
    case 'ekonomi': return 'bg-orange-500/10 text-orange-500 border border-orange-500/20'
    default: return 'bg-gray-500/10 text-gray-500 border border-gray-500/20'
  }
})

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public.siteUrl || 'https://desamaju.id'
const currentUrl = computed(() => `${baseUrl}/agenda/${slug.value}`)
const ogImage = computed(() => agenda.value?.image ? `${baseUrl}${agenda.value.image}` : `${baseUrl}/berita/center-point.jpg`)

useSeoMeta({
  title: () => agenda.value ? `${agenda.value.title} - Agenda Desa` : 'Agenda Tidak Ditemukan',
  description: () => agenda.value?.description || 'Agenda kegiatan Desa Maju',
  ogTitle: () => agenda.value?.title || 'Agenda Desa Maju',
  ogDescription: () => agenda.value?.description || 'Agenda kegiatan Desa Maju',
  ogImage: () => ogImage.value,
  ogUrl: () => currentUrl.value,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: () => agenda.value?.title || 'Agenda Desa Maju',
  twitterDescription: () => agenda.value?.description || 'Agenda kegiatan Desa Maju',
  twitterImage: () => ogImage.value,
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
