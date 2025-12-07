export interface Layanan {
    id: number
    slug: string
    title: string
    description: string
    content: string
    icon: string
    category: string
    requirements: string[]
    processingTime: string
    fee: string
    contact: string
}

export const layananList: Layanan[] = [
    {
        id: 1,
        slug: 'administrasi-kependudukan',
        title: 'Administrasi Kependudukan',
        description: 'Pengurusan surat pengantar, KTP, KK secara online tanpa antri.',
        content: `
      <p>Layanan Administrasi Kependudukan menyediakan berbagai pengurusan dokumen kependudukan secara digital. Warga dapat mengajukan permohonan secara online dan mengambil dokumen yang sudah jadi di kantor desa.</p>

      <h2>Jenis Layanan</h2>
      <ul>
        <li><strong>Surat Pengantar KTP:</strong> Untuk pembuatan atau perpanjangan KTP</li>
        <li><strong>Surat Pengantar KK:</strong> Untuk pembuatan atau perubahan Kartu Keluarga</li>
        <li><strong>Surat Keterangan Domisili:</strong> Bukti tempat tinggal sementara</li>
        <li><strong>Surat Keterangan Pindah:</strong> Untuk pindah ke desa/kelurahan lain</li>
        <li><strong>Surat Keterangan Kelahiran:</strong> Pengantar untuk akta kelahiran</li>
        <li><strong>Surat Keterangan Kematian:</strong> Pengantar untuk akta kematian</li>
      </ul>

      <h2>Cara Pengajuan Online</h2>
      <ol>
        <li>Login ke portal layanan desa dengan NIK</li>
        <li>Pilih jenis surat yang dibutuhkan</li>
        <li>Isi formulir dengan data yang diminta</li>
        <li>Upload dokumen pendukung (jika diperlukan)</li>
        <li>Submit permohonan</li>
        <li>Tunggu notifikasi via SMS/WhatsApp</li>
        <li>Ambil dokumen di kantor desa</li>
      </ol>

      <blockquote>
        "Dengan layanan digital, warga tidak perlu lagi antri berjam-jam di kantor desa. Cukup ajukan online, dan ambil dokumen kapan saja."
      </blockquote>
    `,
        icon: 'FileText',
        category: 'Kependudukan',
        requirements: [
            'KTP asli pemohon',
            'Kartu Keluarga asli',
            'Pas foto 3x4 (untuk KTP)',
            'Surat pengantar RT/RW',
            'Dokumen pendukung sesuai jenis surat'
        ],
        processingTime: '1-2 hari kerja',
        fee: 'Gratis',
        contact: '0812-3456-7890'
    },
    {
        id: 2,
        slug: 'peta-gis-desa',
        title: 'Peta GIS Desa',
        description: 'Pemetaan lahan, potensi desa, dan lokasi wisata berbasis satelit.',
        content: `
      <p>Sistem Informasi Geografis (GIS) Desa Maju menyediakan peta digital interaktif yang menampilkan berbagai informasi spasial desa.</p>

      <h2>Fitur Peta GIS</h2>
      <ul>
        <li><strong>Peta Dasar:</strong> Batas wilayah, jalan, sungai, dan infrastruktur</li>
        <li><strong>Peta Penggunaan Lahan:</strong> Sawah, perkebunan, pemukiman, dll</li>
        <li><strong>Peta Potensi Desa:</strong> Lokasi UMKM, pertanian, wisata</li>
        <li><strong>Peta Fasilitas Umum:</strong> Sekolah, puskesmas, masjid, balai desa</li>
        <li><strong>Peta Rawan Bencana:</strong> Zona rawan longsor, banjir</li>
      </ul>

      <h2>Manfaat</h2>
      <ul>
        <li>Membantu perencanaan pembangunan desa yang tepat sasaran</li>
        <li>Mempermudah pencarian lokasi fasilitas umum</li>
        <li>Mendukung pengembangan pariwisata desa</li>
        <li>Menyediakan data spasial untuk investor dan peneliti</li>
      </ul>

      <blockquote>
        "Peta GIS adalah alat penting untuk visualisasi data desa dan mendukung pengambilan keputusan berbasis data."
      </blockquote>

      <h2>Akses Peta</h2>
      <p>Peta GIS dapat diakses melalui portal desa atau aplikasi mobile. Beberapa layer informasi memerlukan login untuk akses penuh.</p>
    `,
        icon: 'Map',
        category: 'Informasi',
        requirements: [
            'Akses internet',
            'Browser modern (Chrome, Firefox, Edge)',
            'Akun portal desa (untuk fitur lengkap)'
        ],
        processingTime: 'Akses langsung',
        fee: 'Gratis',
        contact: '0812-3456-7891'
    },
    {
        id: 3,
        slug: 'transparansi-anggaran',
        title: 'Transparansi Anggaran',
        description: 'Info APBDes, realisasi anggaran, dan laporan pembangunan realtime.',
        content: `
      <p>Portal Transparansi Anggaran menyediakan informasi terbuka tentang pengelolaan keuangan desa, termasuk APBDes, realisasi anggaran, dan laporan pembangunan.</p>

      <h2>Informasi yang Tersedia</h2>
      <ul>
        <li><strong>APBDes:</strong> Rencana anggaran pendapatan dan belanja desa</li>
        <li><strong>Realisasi Anggaran:</strong> Update berkala penggunaan dana</li>
        <li><strong>Laporan Keuangan:</strong> Bulanan, semester, dan tahunan</li>
        <li><strong>Proyek Pembangunan:</strong> Status dan progress kegiatan</li>
        <li><strong>Sumber Dana:</strong> ADD, Dana Desa, PADes, dll</li>
      </ul>

      <h2>Tujuan Transparansi</h2>
      <ul>
        <li>Meningkatkan akuntabilitas pengelolaan keuangan desa</li>
        <li>Memberikan akses informasi kepada masyarakat</li>
        <li>Mendorong partisipasi warga dalam pengawasan</li>
        <li>Mencegah penyalahgunaan anggaran</li>
      </ul>

      <blockquote>
        "Transparansi adalah kunci kepercayaan. Dengan keterbukaan informasi, warga dapat mengawasi dan berpartisipasi aktif dalam pembangunan desa."
      </blockquote>

      <h2>Cara Mengakses</h2>
      <p>Informasi anggaran dapat diakses melalui portal desa pada menu "Transparansi". Data diperbarui setiap bulan oleh bendahara desa.</p>
    `,
        icon: 'BarChart2',
        category: 'Keuangan',
        requirements: [
            'Akses internet',
            'Browser modern'
        ],
        processingTime: 'Akses langsung',
        fee: 'Gratis',
        contact: '0812-3456-7892'
    },
    {
        id: 4,
        slug: 'lapor-warga',
        title: 'Lapor Warga',
        description: 'Saluran pengaduan masyarakat dan aspirasi pembangunan desa.',
        content: `
      <p>Layanan Lapor Warga adalah saluran resmi untuk menyampaikan pengaduan, aspirasi, dan masukan kepada Pemerintah Desa Maju.</p>

      <h2>Jenis Laporan</h2>
      <ul>
        <li><strong>Pengaduan:</strong> Keluhan terkait pelayanan publik</li>
        <li><strong>Aspirasi:</strong> Usulan program atau kegiatan</li>
        <li><strong>Informasi:</strong> Melaporkan kejadian atau kondisi tertentu</li>
        <li><strong>Pertanyaan:</strong> Permintaan informasi atau klarifikasi</li>
      </ul>

      <h2>Cara Melapor</h2>
      <ol>
        <li>Isi formulir laporan dengan lengkap</li>
        <li>Pilih kategori laporan yang sesuai</li>
        <li>Jelaskan kronologi atau detail laporan</li>
        <li>Lampirkan foto/dokumen pendukung (jika ada)</li>
        <li>Submit laporan</li>
        <li>Catat nomor tiket untuk tracking</li>
      </ol>

      <h2>Proses Tindak Lanjut</h2>
      <ul>
        <li>Laporan diterima dan diverifikasi (1 hari)</li>
        <li>Disposisi ke bagian terkait (1-2 hari)</li>
        <li>Tindak lanjut sesuai jenis laporan (3-7 hari)</li>
        <li>Notifikasi hasil ke pelapor via SMS/WhatsApp</li>
      </ul>

      <blockquote>
        "Setiap laporan warga adalah masukan berharga untuk perbaikan pelayanan dan pembangunan desa."
      </blockquote>
    `,
        icon: 'Megaphone',
        category: 'Pengaduan',
        requirements: [
            'NIK atau KTP',
            'Nomor HP aktif',
            'Alamat email (opsional)',
            'Bukti/foto pendukung (opsional)'
        ],
        processingTime: '3-7 hari kerja',
        fee: 'Gratis',
        contact: '0812-3456-7893'
    }
]

export const getLayananBySlug = (slug: string): Layanan | undefined => {
    return layananList.find(layanan => layanan.slug === slug)
}

export const getRelatedLayanan = (currentSlug: string, limit: number = 3): Layanan[] => {
    return layananList.filter(layanan => layanan.slug !== currentSlug).slice(0, limit)
}
