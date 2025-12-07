export interface Agenda {
    id: number
    slug: string
    title: string
    description: string
    content: string
    date: string
    time: string
    location: string
    organizer: string
    category: string
    image?: string
}

export const agendaList: Agenda[] = [
    {
        id: 1,
        slug: 'musyawarah-desa-rkpdes-2024',
        title: 'Musyawarah Desa - Pembahasan RKPDes 2024',
        description: 'Musyawarah desa untuk membahas Rencana Kerja Pemerintah Desa tahun 2024.',
        content: `
      <p>Pemerintah Desa Maju mengundang seluruh warga untuk hadir dalam Musyawarah Desa yang akan membahas Rencana Kerja Pemerintah Desa (RKPDes) tahun 2024.</p>

      <h2>Tujuan Musyawarah</h2>
      <p>Musyawarah ini bertujuan untuk:</p>
      <ul>
        <li>Menampung aspirasi warga terkait program pembangunan desa</li>
        <li>Menyusun prioritas kegiatan pembangunan tahun 2024</li>
        <li>Menetapkan alokasi anggaran dana desa</li>
        <li>Evaluasi pelaksanaan program tahun sebelumnya</li>
      </ul>

      <h2>Agenda Acara</h2>
      <ul>
        <li>08:00 - 08:30: Registrasi peserta</li>
        <li>08:30 - 09:00: Pembukaan oleh Kepala Desa</li>
        <li>09:00 - 10:30: Paparan evaluasi RKPDes 2025</li>
        <li>10:30 - 12:00: Diskusi dan penampungan aspirasi</li>
        <li>12:00 - 13:00: Istirahat dan makan siang</li>
        <li>13:00 - 15:00: Penyusunan prioritas RKPDes 2024</li>
        <li>15:00 - 16:00: Kesimpulan dan penutup</li>
      </ul>

      <blockquote>
        "Partisipasi aktif warga sangat diharapkan demi terciptanya pembangunan desa yang tepat sasaran dan sesuai kebutuhan masyarakat." - Sekretaris Desa
      </blockquote>

      <h2>Persyaratan Peserta</h2>
      <p>Peserta yang diundang meliputi:</p>
      <ul>
        <li>Kepala Dusun dan perangkat desa</li>
        <li>Ketua RT/RW se-desa</li>
        <li>Tokoh masyarakat dan tokoh agama</li>
        <li>Perwakilan organisasi kemasyarakatan</li>
        <li>Warga yang berminat (dengan konfirmasi kehadiran)</li>
      </ul>
    `,
        date: '15 November 2025',
        time: '08:00 - 16:00 WIB',
        location: 'Balai Desa Maju',
        organizer: 'Sekretaris Desa',
        category: 'Pemerintahan',
        image: '/berita/kantor-desa.png'
    },
    {
        id: 2,
        slug: 'vaksinasi-ternak-november',
        title: 'Vaksinasi Ternak Gratis',
        description: 'Program vaksinasi ternak gratis bekerja sama dengan Dinas Peternakan.',
        content: `
      <p>Dalam rangka menjaga kesehatan ternak warga, Pemerintah Desa Maju bekerja sama dengan Dinas Peternakan Kabupaten mengadakan program Vaksinasi Ternak Gratis.</p>

      <h2>Jenis Vaksinasi</h2>
      <p>Vaksinasi yang akan diberikan meliputi:</p>
      <ul>
        <li>Vaksin Anthrax untuk sapi dan kambing</li>
        <li>Vaksin SE (Septicaemia Epizootica) untuk sapi</li>
        <li>Vaksin ND (Newcastle Disease) untuk unggas</li>
        <li>Vaksin Rabies untuk anjing dan kucing</li>
      </ul>

      <h2>Persyaratan</h2>
      <ul>
        <li>Membawa KTP pemilik ternak</li>
        <li>Ternak dalam kondisi sehat</li>
        <li>Mendaftarkan jumlah ternak ke RT masing-masing</li>
      </ul>

      <blockquote>
        "Program ini sangat penting untuk mencegah penyebaran penyakit ternak yang dapat merugikan peternak dan masyarakat sekitar." - Dinas Peternakan
      </blockquote>

      <h2>Lokasi dan Waktu</h2>
      <p>Vaksinasi akan dilaksanakan di Lapangan Desa, mulai pukul 07:00 WIB. Diharapkan warga datang tepat waktu untuk kelancaran proses vaksinasi.</p>
    `,
        date: '20 November 2025',
        time: '07:00 - 12:00 WIB',
        location: 'Lapangan Desa',
        organizer: 'Dinas Peternakan',
        category: 'Kesehatan',
        image: '/berita/Cibutu04.jpeg'
    },
    {
        id: 3,
        slug: 'pelatihan-komputer-dasar',
        title: 'Pelatihan Komputer Dasar untuk Warga',
        description: 'Pelatihan penggunaan komputer dan internet dasar untuk warga desa.',
        content: `
      <p>Sebagai bagian dari program Desa Digital, kami mengadakan Pelatihan Komputer Dasar yang ditujukan untuk warga desa yang ingin belajar menggunakan komputer dan internet.</p>

      <h2>Materi Pelatihan</h2>
      <ul>
        <li>Pengenalan hardware komputer</li>
        <li>Penggunaan sistem operasi Windows</li>
        <li>Microsoft Word untuk pembuatan dokumen</li>
        <li>Microsoft Excel dasar untuk perhitungan</li>
        <li>Browsing internet dengan aman</li>
        <li>Penggunaan email dan media sosial</li>
      </ul>

      <h2>Fasilitas</h2>
      <p>Peserta akan mendapatkan:</p>
      <ul>
        <li>Komputer untuk praktik (1 orang 1 komputer)</li>
        <li>Modul pembelajaran</li>
        <li>Snack dan makan siang</li>
        <li>Sertifikat kehadiran</li>
      </ul>

      <blockquote>
        "Tidak ada kata terlambat untuk belajar. Dengan kemampuan komputer, warga dapat mengakses berbagai layanan digital dengan mudah." - Tim Pengabdian Masyarakat
      </blockquote>

      <h2>Pendaftaran</h2>
      <p>Kuota terbatas untuk 30 peserta. Pendaftaran dapat dilakukan di kantor desa atau menghubungi nomor yang tertera.</p>
    `,
        date: '25 November 2025',
        time: '09:00 - 15:00 WIB',
        location: 'Lab Komputer Balai Desa',
        organizer: 'Tim Pengabdian Masyarakat',
        category: 'Edukasi',
        image: '/berita/pengabdian.jpg'
    },
    {
        id: 4,
        slug: 'bazar-umkm-desa',
        title: 'Bazar UMKM Desa Maju',
        description: 'Pameran dan penjualan produk UMKM lokal desa.',
        content: `
      <p>Desa Maju mengadakan Bazar UMKM sebagai wadah bagi pelaku usaha mikro, kecil, dan menengah untuk memamerkan dan menjual produk-produk unggulan mereka.</p>

      <h2>Produk yang Dijual</h2>
      <ul>
        <li>Makanan dan minuman tradisional</li>
        <li>Kerajinan tangan</li>
        <li>Produk pertanian organik</li>
        <li>Busana dan aksesoris</li>
        <li>Tanaman hias</li>
      </ul>

      <h2>Rangkaian Acara</h2>
      <ul>
        <li>Pembukaan oleh Kepala Desa</li>
        <li>Penampilan kesenian daerah</li>
        <li>Doorprize dan undian berhadiah</li>
        <li>Lomba foto produk UMKM</li>
      </ul>

      <blockquote>
        "Mari dukung produk lokal! Dengan membeli produk UMKM desa, kita turut membantu pertumbuhan ekonomi warga." - Kepala Desa
      </blockquote>

      <h2>Informasi Tambahan</h2>
      <p>Bazar terbuka untuk umum. Parkir gratis tersedia di area lapangan desa. Ajak keluarga dan teman-teman untuk meramaikan acara ini!</p>
    `,
        date: '1 Desember 2025',
        time: '08:00 - 17:00 WIB',
        location: 'Halaman Kantor Desa',
        organizer: 'Koperasi Desa',
        category: 'Ekonomi',
        image: '/berita/center-point.jpg'
    }
]

export const getAgendaBySlug = (slug: string): Agenda | undefined => {
    return agendaList.find(agenda => agenda.slug === slug)
}

export const getUpcomingAgenda = (limit: number = 3): Agenda[] => {
    return agendaList.slice(0, limit)
}

export const getRelatedAgenda = (currentSlug: string, limit: number = 3): Agenda[] => {
    return agendaList.filter(agenda => agenda.slug !== currentSlug).slice(0, limit)
}
