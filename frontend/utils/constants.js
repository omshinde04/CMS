// ─── API ─────────────────────────────────────────────────────────────────────
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api';

// ─── Auth ─────────────────────────────────────────────────────────────────────
export const TOKEN_KEY   = 'ld_token';
export const USER_KEY    = 'ld_user';

// ─── Roles ───────────────────────────────────────────────────────────────────
export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN:       'admin',
  MODERATOR:   'moderator',
};

// ─── Complaint status ─────────────────────────────────────────────────────────
export const COMPLAINT_STATUS = {
  PENDING:     'pending',
  IN_PROGRESS: 'in_progress',
  RESOLVED:    'resolved',
  REJECTED:    'rejected',
};

// ─── Appointment status ───────────────────────────────────────────────────────
export const APPOINTMENT_STATUS = {
  PENDING:   'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
};

// ─── Nav links (public) ───────────────────────────────────────────────────────
export const PUBLIC_NAV = [
  { label: 'Home',               href: '/' },
  { label: 'About',              href: '/about' },
  { label: 'Vision & Mission',   href: '/vision' },
  { label: 'Projects',           href: '/projects' },
  { label: 'Gallery',            href: '/gallery' },
  { label: 'Blogs',              href: '/blogs' },
  { label: 'News',               href: '/news' },
  { label: 'Schemes',            href: '/schemes' },
  { label: 'Election Results',   href: '/election-results' },
  { label: 'Contact',            href: '/contact' },
];

// ─── Admin sidebar links ──────────────────────────────────────────────────────
export const ADMIN_NAV = [
  { label: 'Dashboard',    href: '/admin/dashboard',    icon: 'LayoutDashboard' },
  { label: 'Complaints',   href: '/admin/complaints',   icon: 'MessageSquare' },
  { label: 'Appointments', href: '/admin/appointments', icon: 'CalendarCheck' },
  { label: 'Blogs',        href: '/admin/blogs',        icon: 'FileText' },
  { label: 'Gallery',      href: '/admin/gallery',      icon: 'Image' },
  { label: 'Projects',     href: '/admin/projects',     icon: 'Briefcase' },
  { label: 'Users',        href: '/admin/users',        icon: 'Users' },
  { label: 'Settings',     href: '/admin/settings',     icon: 'Settings' },
];

// ─── Pagination ───────────────────────────────────────────────────────────────
export const DEFAULT_PAGE_SIZE = 10;
