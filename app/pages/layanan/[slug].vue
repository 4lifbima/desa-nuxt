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
          <NuxtLink to="/#layanan" @click="closeSidebar" class="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-white/5 hover:text-primary rounded-xl font-medium">
            <Briefcase class="w-5 h-5 text-primary/80" /> Layanan
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <main class="pt-24 pb-20 min-h-screen">
      <article v-if="layanan" class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        <!-- Breadcrumb -->
        <nav class="mb-8 reveal">
          <ol class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
            <li><NuxtLink to="/" class="hover:text-primary flex items-center gap-1"><Home class="w-4 h-4" /> Beranda</NuxtLink></li>
            <li><ChevronRight class="w-4 h-4" /></li>
            <li><NuxtLink to="/#layanan" class="hover:text-primary">Layanan</NuxtLink></li>
            <li><ChevronRight class="w-4 h-4" /></li>
            <li class="text-gray-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none">{{ layanan.title }}</li>
          </ol>
        </nav>

        <!-- Header -->
        <header class="mb-10 reveal">
          <div class="flex items-start gap-6 flex-col sm:flex-row">
            <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
              <component :is="iconComponent" class="w-10 h-10" />
            </div>
            <div class="flex-1">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
                {{ layanan.category }}
              </span>
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">{{ layanan.title }}</h1>
              <p class="text-lg text-gray-600 dark:text-gray-300">{{ layanan.description }}</p>
            </div>
          </div>
        </header>

        <!-- Quick Info Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 reveal" style="transition-delay: 100ms;">
          <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800/30">
            <div class="flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
              <Clock class="w-5 h-5" />
              <span class="text-sm font-bold uppercase">Waktu Proses</span>
            </div>
            <p class="font-semibold text-green-700 dark:text-green-300">{{ layanan.processingTime }}</p>
          </div>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800/30">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
              <Banknote class="w-5 h-5" />
              <span class="text-sm font-bold uppercase">Biaya</span>
            </div>
            <p class="font-semibold text-blue-700 dark:text-blue-300">{{ layanan.fee }}</p>
          </div>
          <div class="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border border-orange-200 dark:border-orange-800/30">
            <div class="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-2">
              <Phone class="w-5 h-5" />
              <span class="text-sm font-bold uppercase">Kontak</span>
            </div>
            <p class="font-semibold text-orange-700 dark:text-orange-300">{{ layanan.contact }}</p>
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
                 v-html="layanan.content"></div>

            <!-- CTA Button -->
            <div class="mt-10 p-8 bg-gradient-to-r from-primary to-red-600 rounded-2xl text-white">
              <h3 class="text-2xl font-bold mb-3">Siap Menggunakan Layanan Ini?</h3>
              <p class="opacity-90 mb-6">Ajukan permohonan sekarang melalui portal layanan desa atau datang langsung ke kantor desa.</p>
              <div class="flex flex-wrap gap-4">
                <a href="#" class="px-6 py-3 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Ajukan Online
                </a>
                <a href="#" class="px-6 py-3 border-2 border-white rounded-lg font-bold hover:bg-white/10 transition-colors">
                  Lihat Panduan
                </a>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 reveal" style="transition-delay: 300ms;">
            <div class="sticky top-28 space-y-6">
              <!-- Requirements -->
              <div class="bg-gray-50 dark:bg-dark-surface p-6 rounded-xl border border-gray-100 dark:border-white/5">
                <h3 class="font-bold text-lg mb-4 flex items-center gap-2">
                  <ClipboardList class="w-5 h-5 text-primary" /> Persyaratan
                </h3>
                <ul class="space-y-3">
                  <li v-for="(req, index) in layanan.requirements" :key="index" class="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle class="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    {{ req }}
                  </li>
                </ul>
              </div>

              <!-- Related Services -->
              <div>
                <h3 class="font-bold text-xl mb-4 flex items-center gap-2 border-l-4 border-primary pl-4">
                  <Briefcase class="w-5 h-5 text-primary" /> Layanan Lainnya
                </h3>
                <div class="space-y-3">
                  <NuxtLink v-for="related in relatedLayanan" :key="related.id" :to="`/layanan/${related.slug}`"
                    class="group flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-surface rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all">
                    <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <component :is="getIconComponent(related.icon)" class="w-6 h-6" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="font-bold text-sm group-hover:text-primary transition-colors truncate">{{ related.title }}</h4>
                      <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ related.category }}</p>
                    </div>
                    <ChevronRight class="w-5 h-5 text-gray-400 group-hover:text-primary shrink-0" />
                  </NuxtLink>
                </div>
              </div>

              <NuxtLink to="/#layanan" class="w-full py-4 bg-primary text-white text-center rounded-xl font-bold shadow-neon hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                <ArrowLeft class="w-5 h-5" /> Semua Layanan
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
        <h1 class="text-3xl font-bold mb-4">Layanan Tidak Ditemukan</h1>
        <p class="text-gray-500 dark:text-gray-400 mb-8">Maaf, layanan yang Anda cari tidak tersedia.</p>
        <NuxtLink to="/#layanan" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-neon hover:bg-primary-dark transition-all">
          <ArrowLeft class="w-5 h-5" /> Semua Layanan
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
  Activity, Menu, X, Home, Briefcase, ChevronRight, Clock, Banknote, Phone,
  ClipboardList, CheckCircle, ArrowLeft, FileX, FileText, Map, BarChart2, Megaphone
} from 'lucide-vue-next'
import { getLayananBySlug, getRelatedLayanan } from '~/data/layanan'

const route = useRoute()
const { isDark, toggleDarkMode } = useDarkMode()
const { isOpen: sidebarOpen, openSidebar, closeSidebar } = useSidebar()
const { initRevealAnimations, initNavbarScroll } = useScrollAnimation()

const slug = computed(() => route.params.slug as string)
const layanan = computed(() => getLayananBySlug(slug.value))
const relatedLayanan = computed(() => getRelatedLayanan(slug.value, 3))

const iconMap: Record<string, any> = {
  FileText,
  Map,
  BarChart2,
  Megaphone
}

const iconComponent = computed(() => iconMap[layanan.value?.icon || 'FileText'] || FileText)
const getIconComponent = (iconName: string) => iconMap[iconName] || FileText

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public.siteUrl || 'https://desamaju.id'
const currentUrl = computed(() => `${baseUrl}/layanan/${slug.value}`)

useSeoMeta({
  title: () => layanan.value ? `${layanan.value.title} - Layanan Desa` : 'Layanan Tidak Ditemukan',
  description: () => layanan.value?.description || 'Layanan digital Desa Maju',
  ogTitle: () => layanan.value?.title || 'Layanan Desa Maju',
  ogDescription: () => layanan.value?.description || 'Layanan digital Desa Maju',
  ogUrl: () => currentUrl.value,
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: () => layanan.value?.title || 'Layanan Desa Maju',
  twitterDescription: () => layanan.value?.description || 'Layanan digital Desa Maju',
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
