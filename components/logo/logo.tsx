import { cn } from "@/lib/cn";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
      <g clip-path="url(#clip0_8_107)">
        <path
          d="M142.26 9.37L139.48 72.35L199.62 91.29L143.68 120.37L157.36 181.92L104.2 148.02L57.74 190.63L60.52 127.65L0.38 108.72L56.32 79.63L42.64 18.09L95.8 51.98L142.26 9.37Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_107">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function TrajectionIcon({ className }: { className?: string }) {
  return (
    <svg width="200" height="201" viewBox="0 0 200 201" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
      <mask id="mask0_11_108" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="201">
        <path d="M200 0.84H0V200.84H200V0.84Z" fill="white" />
      </mask>
      <g mask="url(#mask0_11_108)">
        <path
          d="M189.57 51.39L102.07 1.39C101.44 1.03 100.73 0.84 100 0.84C99.28 0.84 98.56 1.03 97.93 1.39L10.43 51.39C9.8 51.76 9.27 52.28 8.9 52.92C8.53 53.55 8.33 54.28 8.33 55.01V146.68C8.33 148.17 9.13 149.55 10.43 150.29L97.93 200.29C98.58 200.66 99.28 200.84 100 200.84C100.72 200.84 101.43 200.66 102.07 200.29L189.57 150.29C190.21 149.93 190.74 149.4 191.1 148.77C191.47 148.13 191.67 147.41 191.67 146.68V55.01C191.67 54.28 191.47 53.55 191.1 52.92C190.74 52.28 190.2 51.76 189.57 51.39Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function VocaboIcon({ className }: { className?: string }) {
  return (
    <svg width="400" height="403" viewBox="0 0 400 403" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
      <g clip-path="url(#clip0_413_789)">
        <rect x="156.024" y="157.229" width="87.9518" height="87.9518" fill="currentColor" stroke="currentColor" stroke-width="1.20482" />
        <rect x="89.7591" y="0.60241" width="87.9518" height="87.9518" fill="currentColor" stroke="currentColor" stroke-width="1.20482" />
        <rect x="0.60241" y="89.759" width="87.9518" height="87.9518" fill="currentColor" stroke="currentColor" stroke-width="1.20482" />
        <rect x="311.446" y="89.759" width="87.9518" height="87.9518" fill="currentColor" stroke="currentColor" stroke-width="1.20482" />
        <rect x="311.446" y="224.699" width="87.9518" height="87.9518" fill="currentColor" stroke="currentColor" stroke-width="1.20482" />
        <rect x="222.289" y="313.855" width="87.9518" height="87.9518" fill="currentColor" stroke="currentColor" stroke-width="1.20482" />
        <rect x="89.7591" y="313.855" width="87.9518" height="87.9518" fill="currentColor" stroke="currentColor" stroke-width="1.20482" />
        <rect x="0.60241" y="224.699" width="87.9518" height="87.9518" fill="currentColor" stroke="currentColor" stroke-width="1.20482" />
        <rect x="222.289" y="0.60241" width="87.9518" height="87.9518" fill="currentColor" stroke="white" stroke-width="1.20482" />
      </g>
      <defs>
        <clipPath id="clip0_413_789">
          <rect width="400" height="402.41" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
