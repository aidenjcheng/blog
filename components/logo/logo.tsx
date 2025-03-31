import { cn } from "@/lib/cn";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g clip-path="url(#clip0_8_107)">
        <path
          d="M142.262 9.36958L139.483 72.354L199.62 91.285L143.684 120.371L157.358 181.916L104.201 148.017L57.7383 190.631L60.5172 127.646L0.380693 108.716L56.3161 79.6302L42.6425 18.0852L95.7992 51.9838L142.262 9.36958Z"
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
    <svg
      width="200"
      height="201"
      viewBox="0 0 200 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <mask
        id="mask0_11_108"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="200"
        height="201"
      >
        <path d="M200 0.843262H0V200.843H200V0.843262Z" fill="white" />
      </mask>
      <g mask="url(#mask0_11_108)">
        <path
          d="M189.567 51.3932L102.067 1.39316C101.438 1.03276 100.725 0.843262 100 0.843262C99.275 0.843262 98.563 1.03276 97.934 1.39316L10.4335 51.3932C9.79569 51.7574 9.2655 52.2838 8.8968 52.919C8.528 53.5541 8.3336 54.2755 8.3335 55.01V146.677C8.3335 148.169 9.13349 149.552 10.4335 150.294L97.934 200.294C98.575 200.66 99.284 200.844 100 200.844C100.717 200.844 101.425 200.66 102.067 200.294L189.567 150.294C190.205 149.929 190.735 149.403 191.104 148.768C191.473 148.133 191.667 147.411 191.667 146.677V55.01C191.667 54.2755 191.472 53.5541 191.104 52.919C190.735 52.2838 190.204 51.7575 189.567 51.3932Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function VocaboIcon({ className }: { className?: string }) {
  return (
    <svg
      width="400"
      height="403"
      viewBox="0 0 400 403"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g clip-path="url(#clip0_413_789)">
        <rect
          x="156.024"
          y="157.229"
          width="87.9518"
          height="87.9518"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.20482"
        />
        <rect
          x="89.7591"
          y="0.60241"
          width="87.9518"
          height="87.9518"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.20482"
        />
        <rect
          x="0.60241"
          y="89.759"
          width="87.9518"
          height="87.9518"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.20482"
        />
        <rect
          x="311.446"
          y="89.759"
          width="87.9518"
          height="87.9518"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.20482"
        />
        <rect
          x="311.446"
          y="224.699"
          width="87.9518"
          height="87.9518"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.20482"
        />
        <rect
          x="222.289"
          y="313.855"
          width="87.9518"
          height="87.9518"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.20482"
        />
        <rect
          x="89.7591"
          y="313.855"
          width="87.9518"
          height="87.9518"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.20482"
        />
        <rect
          x="0.60241"
          y="224.699"
          width="87.9518"
          height="87.9518"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.20482"
        />
        <rect
          x="222.289"
          y="0.60241"
          width="87.9518"
          height="87.9518"
          fill="currentColor"
          stroke="white"
          stroke-width="1.20482"
        />
      </g>
      <defs>
        <clipPath id="clip0_413_789">
          <rect width="400" height="402.41" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
