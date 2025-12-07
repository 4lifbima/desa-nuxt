export interface Berita {
    id: number
    slug: string
    title: string
    excerpt: string
    content: string
    category: string
    image: string
    author: string
    date: string
    readTime: string
}

export const beritaList: Berita[] = [
    {
        id: 1,
        slug: 'peresmian-jaringan-internet-fiber-optic',
        title: 'Peresmian Jaringan Internet Fiber Optic di RW 05',
        excerpt: 'Peningkatan infrastruktur digital terus dilakukan demi menunjang aktivitas belajar dan ekonomi warga setempat.',
        content: `
      <p>Dalam rangka mewujudkan visi Desa Digital yang modern dan terkoneksi, Pemerintah Desa Maju telah meresmikan jaringan internet fiber optic di wilayah RW 05 pada hari Minggu, 10 Oktober 2023.</p>

      <p>Peresmian ini dihadiri langsung oleh Kepala Desa Bpk. Wijaya Kusuma beserta jajaran perangkat desa dan perwakilan warga RW 05. Jaringan fiber optic ini merupakan bagian dari program Smart Village yang dicanangkan sejak awal tahun 2023.</p>

      <h2>Manfaat Bagi Warga</h2>
      <p>Dengan adanya jaringan internet berkecepatan tinggi ini, warga dapat menikmati berbagai kemudahan seperti:</p>
      <ul>
        <li>Akses internet stabil untuk kegiatan belajar online</li>
        <li>Mendukung UMKM dalam memasarkan produk secara digital</li>
        <li>Pelayanan administrasi desa yang lebih cepat dan efisien</li>
        <li>Akses informasi dan komunikasi yang lebih lancar</li>
      </ul>

      <h2>Rencana Pengembangan</h2>
      <p>Pemerintah Desa berencana untuk memperluas jaringan fiber optic ini ke seluruh wilayah desa secara bertahap. Target utama adalah menjangkau semua fasilitas umum seperti sekolah, puskesmas, dan balai desa pada akhir tahun 2024.</p>

      <blockquote>
        "Ini adalah langkah nyata kami dalam membangun desa yang cerdas. Internet bukan lagi barang mewah, tapi kebutuhan dasar untuk kemajuan bersama." - Bpk. Wijaya Kusuma, Kepala Desa
      </blockquote>

      <p>Program ini merupakan hasil kerjasama antara Pemerintah Desa dengan provider telekomunikasi nasional dan didukung penuh oleh dana desa tahun anggaran 2023.</p>
    `,
        category: 'Pembangunan',
        image: '/berita/center-point.jpg',
        author: 'Admin Desa',
        date: '10 Oktober 2023',
        readTime: '5 menit'
    },
    {
        id: 2,
        slug: 'pelatihan-digital-marketing-umkm',
        title: 'Pelatihan Digital Marketing untuk UMKM Desa',
        excerpt: 'Membuka wawasan pelaku usaha mikro mengenai potensi pasar online marketplace.',
        content: `
      <p>Dalam upaya meningkatkan kapasitas pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) di Desa Maju, Pemerintah Desa bekerja sama dengan Dinas Koperasi dan UKM mengadakan Pelatihan Digital Marketing pada tanggal 8 Oktober 2023.</p>

      <p>Pelatihan yang berlangsung di Balai Desa ini diikuti oleh 45 peserta yang terdiri dari berbagai jenis usaha mulai dari kuliner, kerajinan tangan, hingga produk pertanian.</p>

      <h2>Materi Pelatihan</h2>
      <p>Para peserta mendapatkan berbagai materi praktis meliputi:</p>
      <ul>
        <li>Pengenalan marketplace seperti Tokopedia, Shopee, dan Bukalapak</li>
        <li>Cara membuat foto produk yang menarik</li>
        <li>Teknik copywriting untuk deskripsi produk</li>
        <li>Strategi promosi di media sosial</li>
        <li>Pengelolaan pesanan dan layanan pelanggan</li>
      </ul>

      <h2>Dampak yang Diharapkan</h2>
      <p>Dengan pelatihan ini, diharapkan UMKM Desa Maju dapat memperluas jangkauan pasar mereka ke luar wilayah desa, bahkan ke seluruh Indonesia. Potensi peningkatan pendapatan para pelaku UMKM diproyeksikan mencapai 50% dalam 6 bulan ke depan.</p>

      <blockquote>
        "Saya sangat bersyukur dengan pelatihan ini. Sekarang saya sudah bisa membuka toko online dan mulai menerima pesanan dari luar kota." - Ibu Siti, Pengusaha Kue Tradisional
      </blockquote>

      <p>Pemerintah Desa berkomitmen untuk terus mengadakan pelatihan serupa secara berkala guna memastikan UMKM desa dapat bersaing di era digital.</p>
    `,
        category: 'Ekonomi',
        image: '/berita/pengabdian.jpg',
        author: 'Admin Desa',
        date: '8 Oktober 2023',
        readTime: '4 menit'
    },
    {
        id: 3,
        slug: 'pembangunan-kantor-desa-baru',
        title: 'Pembangunan Kantor Desa Baru Dimulai',
        excerpt: 'Kantor desa baru dengan konsep modern dan ramah lingkungan mulai dibangun bulan ini.',
        content: `
      <p>Proyek pembangunan Kantor Desa Maju yang baru telah resmi dimulai pada awal bulan Oktober 2023. Kantor baru ini akan menggantikan bangunan lama yang sudah berusia lebih dari 30 tahun.</p>

      <p>Pembangunan ini merupakan respons terhadap kebutuhan ruang pelayanan yang lebih luas dan modern seiring dengan meningkatnya jumlah penduduk dan kompleksitas layanan administrasi desa.</p>

      <h2>Konsep Bangunan</h2>
      <p>Kantor desa baru dirancang dengan konsep modern dan ramah lingkungan, meliputi:</p>
      <ul>
        <li>Sistem pencahayaan dan ventilasi alami</li>
        <li>Panel surya untuk sumber energi alternatif</li>
        <li>Ruang pelayanan terpadu yang lebih luas</li>
        <li>Fasilitas pendukung seperti ruang laktasi dan akses disabilitas</li>
        <li>Taman dan area hijau di sekitar bangunan</li>
      </ul>

      <h2>Timeline Proyek</h2>
      <p>Pembangunan diperkirakan akan selesai dalam waktu 8 bulan dengan target peresmian pada pertengahan tahun 2024. Total anggaran yang dialokasikan untuk proyek ini mencapai Rp 1,5 miliar dari dana desa.</p>

      <blockquote>
        "Kantor desa bukan hanya tempat bekerja perangkat desa, tapi juga rumah bagi seluruh warga. Kami ingin membangun tempat yang nyaman dan membanggakan." - Bpk. Wijaya Kusuma
      </blockquote>
    `,
        category: 'Pembangunan',
        image: '/berita/kantor-desa.png',
        author: 'Admin Desa',
        date: '5 Oktober 2023',
        readTime: '3 menit'
    },
    {
        id: 4,
        slug: 'program-pengabdian-masyarakat',
        title: 'Program Pengabdian Masyarakat Bersama Mahasiswa',
        excerpt: 'Kolaborasi dengan perguruan tinggi untuk program pemberdayaan masyarakat desa.',
        content: `
      <p>Desa Maju menyambut kedatangan 25 mahasiswa dari berbagai perguruan tinggi untuk melaksanakan program pengabdian masyarakat selama 1 bulan penuh. Program ini merupakan bagian dari Kuliah Kerja Nyata (KKN) tematik yang berfokus pada digitalisasi desa.</p>

      <p>Para mahasiswa yang berasal dari jurusan Teknologi Informasi, Komunikasi, dan Ekonomi ini akan membantu dalam berbagai program desa.</p>

      <h2>Program Kegiatan</h2>
      <ul>
        <li>Pendampingan UMKM dalam pemasaran digital</li>
        <li>Pelatihan komputer dasar untuk warga</li>
        <li>Pembuatan website profil desa</li>
        <li>Dokumentasi potensi wisata desa</li>
        <li>Edukasi literasi digital untuk anak-anak</li>
      </ul>

      <h2>Manfaat Kolaborasi</h2>
      <p>Kerjasama dengan perguruan tinggi memberikan manfaat ganda. Warga desa mendapatkan pengetahuan dan pendampingan, sementara mahasiswa mendapat pengalaman praktis di lapangan.</p>

      <blockquote>
        "Kami sangat terbantu dengan kehadiran adik-adik mahasiswa. Mereka dengan sabar mengajari kami menggunakan smartphone untuk jualan online." - Bapak Surya, Petani Sayur
      </blockquote>

      <p>Program pengabdian masyarakat ini akan berlangsung hingga akhir Oktober dan akan diakhiri dengan pameran hasil karya dan laporan kegiatan.</p>
    `,
        category: 'Sosial',
        image: '/berita/Cibutu04.jpeg',
        author: 'Admin Desa',
        date: '1 Oktober 2023',
        readTime: '4 menit'
    }
]

export const getBeritaBySlug = (slug: string): Berita | undefined => {
    return beritaList.find(berita => berita.slug === slug)
}

export const getRelatedBerita = (currentSlug: string, limit: number = 3): Berita[] => {
    return beritaList.filter(berita => berita.slug !== currentSlug).slice(0, limit)
}
