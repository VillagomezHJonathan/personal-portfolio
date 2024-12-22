const skills = [
  {
    name: 'Python',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
      >
        <rect width="128" height="128" fill="none" />
        <linearGradient
          id="deviconPython0"
          x1="70.252"
          x2="170.659"
          y1="1237.476"
          y2="1151.089"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#5a9fd4" />
          <stop offset="1" stop-color="#306998" />
        </linearGradient>
        <linearGradient
          id="deviconPython1"
          x1="209.474"
          x2="173.62"
          y1="1098.811"
          y2="1149.537"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffd43b" />
          <stop offset="1" stop-color="#ffe873" />
        </linearGradient>
        <path
          fill="url(#deviconPython0)"
          d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007c-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521c-2.268 9.405-2.368 15.275 0 25.096c1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837c-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721c0 2.593-2.083 4.69-4.634 4.69c-2.56 0-4.633-2.097-4.633-4.69c-.001-2.604 2.073-4.721 4.633-4.721"
          transform="translate(0 10.26)"
        />
        <path
          fill="url(#deviconPython1)"
          d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547c7.816 2.297 15.312 2.713 24.665 0c6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519c2.578-7.735 2.467-15.174 0-25.096c-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692c0 2.602-2.074 4.719-4.634 4.719c-2.55 0-4.633-2.117-4.633-4.719c0-2.595 2.083-4.692 4.633-4.692"
          transform="translate(0 10.26)"
        />
        <radialGradient
          id="deviconPython2"
          cx="1825.678"
          cy="444.45"
          r="26.743"
          gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#b8b8b8" stop-opacity="0.498" />
          <stop offset="1" stop-color="#7f7f7f" stop-opacity="0" />
        </radialGradient>
        <path
          fill="url(#deviconPython2)"
          d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416c-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417"
          opacity="0.444"
        />
      </svg>
    )
  },
  {
    name: 'Flask',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="256"
        height="256"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none" />
        <g fill="none">
          <rect width="256" height="256" fill="#0a0a0a" rx="60" />
          <path
            fill="#fff"
            d="M89.778 193.926c-7.238-5.693-14.96-11.151-20.235-18.837c-11.102-13.554-19.65-29.247-25.494-45.737c-3.532-10.724-4.741-22.22-9.295-32.53c-4.763-7.487.817-15.671 9.018-18.051c3.651-.701 10.072-4.145 2.322-1.684c-6.948 5.098-7.62-4.627-.496-5.243c4.862-.646 6.652-4.627 4.99-8.21c-5.22-3.404 12.656-7.145 3.662-12.223c-9.37-10.11 13.106-12.055 7.56-.575c-1.327 8.829 15.706-1.618 11.754 8.577c4.017 4.896 15.042 1.114 14.768 7.983c5.852.402 7.86 5.325 13.353 5.703c5.693 2.571 16.013 4.597 17.95 11.012c-5.648 4.472-18.726-9.236-19.355 3.141c1.706 18.285 1.272 37.121 7.962 54.533c3.164 10.543 10.835 18.843 17.762 27.054c6.629 8.042 15.607 13.704 24.758 18.471c8.028 3.786 16.682 6.297 25.431 7.872c3.548-2.714 9.813-12.804 15.349-8.549c.262 4.781-10.987 9.994-.53 9.465c6.141-1.852 10.4 4.75 15.457-1.205c4.659 5.518 19.364-3.526 16.049 7.754c-4.482 2.892-11.02 1.144-15.509 5.122c-7.403-3.697-13.296 3.309-21.491 2.423c-9.101 1.63-18.36 2.288-27.587 2.302c-15.137-1.196-30.595-1.7-44.995-6.97c-8.112-2.357-16.029-6.977-23.158-11.598m12.784 5.539c7.921 3.426 15.667 7.036 24.348 8.125c13.773 1.916 27.996 4.862 41.818 2.175c-6.256-2.825-12.723 1.1-18.956-2.02c-7.474 1.608-15.496-.41-23.094-1.404c-8.642-3.849-17.967-6.495-26.059-11.492c-10.112-3.693 5.229 4.737 7.96 5.419c6.321 3.588-6.951-1.839-8.822-3.33c-5.294-2.97-5.969-2.349-.524.667c1.096.641 2.18 1.314 3.329 1.86m-15.073-10.652c7.676 2.844-.034-5.397-3.551-4.919c-1.559-2.703-5.954-4.411-2.853-5.864c-5.578 1.937-5.843-7.363-8.465-6.034c-5.9-1.863-2.296-8.464-9.325-12.517c-.642-4.271-6.983-7.975-9.006-14.417c-.893-3.298-7.164-12.77-3.312-3.955c3.28 8.486 9.051 15.753 13.854 23.011c3.73 6.911 8.133 14.134 14.925 18.446c2.29 2.196 4.5 5.561 7.733 6.249m-22.113-24.278c.268-1.159 1.404 2.509 0 0m31.306 27.687c1.7-.761-2.445-.959 0 0m4.167 1.52c-.432-2.099-1.903 1.173 0 0m5.215 2.175c2.483-2.364-3.827-1.49 0 0m8.94 4.983c1.509-2.231-4.83-.842 0 0m-17.166-11.967c3.856-2.495-4.982-.034 0 0m3.912 1.951c-.109-1.319-1.394.591 0 0m19.556 12.206c3.143 1.984 18.357 4.348 8.831.813c-1.594.336-17.665-4.545-8.831-.813m-31.045-24.179c-.306-1.323-4.88-1.46 0 0m9.104 5.306c2.369-1.652-4.918-1.275 0 0m7.657 4.695c3.4-1.282-5.515-1.288 0 0m-20.466-14.035c3.69 2.829 14.877.362 5.65-1.689c-4.2-2.239-13.666-3.771-7.214 1.35zm25.653 15.656c1.536-2.618-6.444-1.495 0 0m-7.795-6.195c9.02 2.552-7.585-5.704-2.226-.939l1.188.538zm15.628 9.033c8.543.082-7.716-1.178 0 0m-36.773-23.437c-.333-1.591-2.108.134 0 0m51.223 31.543c.228-2.874-2.787 2.138 0 0m-36.644-22.615c-.517-1.513-2.67-.062 0 0m-13.768-9.926c4.904-.295-6.715-2.161 0 0m-16.31-10.543c-.61-2.351-5.337-4.226 0 0m42.818 27.174c-.899-1.025-.423.224 0 0m26.651 16.355c-.085-1.566-1.451.592 0 0m-29.01-18.791c.48-2.017-4.182-.611 0 0m-19.855-12.583c3.649-.391-5.845-2.467 0 0m33.586 20.87c5.686-2.253-5.541-1.1 0 0m-17.47-11.859c6.553.845-7.797-4.457-1.438-.475zm22.774 14.003c6.118-3.658 4.101 8.564 10.38 1.032c6.193-4.522-5.349 5.591 2.284.807c5.52-3.692 13.673 1.75 18.824 3.525c3.704-.182 7.304 3.203 11.102 1.144c7.309-1.969-14.294-2.92-8.631-6.413c-6.689 1.946-11.63-2.321-14.921-6.605c-7.503-1.733-16.177-5.568-19.921-12.207c-1.527-2.493 2.205.351-1.318-3.724c-4.521-4.021-6.778-8.585-9.813-13.473c-3.626-1.934-4.048-7.627-4.414-.191c.028-4.693-4.378-7.852-5.453-6.539c-.019-4.519 4.715-2.254 1.401-5.598c-.713-4.684-3.062-9.566-3.768-14.855c-1.097-2.549-.155-8.009-3.744-2.238c-1.308 6.1-.434-7.495 1.599-3.012c2.67-4.575-.958-4.037-1.106-3.402c1.738-3.859 1.1-9.334-.454-7.246c.926-4.091 1.464-15.055-1.387-13.112c1.728-4.278 3.277-19.575-4.224-13.743c-3.04.043-8.303 1.104-10.792 2.341c7.802 4.3-.784 1.553-3.96.87c-.414 3.98-3.56 2.258-7.49 2.297c6.277.777-3.056 6.42-6.657 4.228c-4.677 2.235 4.036 7.814.093 9.539c.485 2.601-7.164-.939-6.563 5.067c-4.54-1.91-.625 7.124 1.646 4.069c7.722 2.09 5.436 6.854 5.633 11.38c-1.259 2.638-6.212-6.199-1.104-5.789c-4.03-6.547-4.458-2.367-7.807.675c-.779.22 8.543 4.327 2.693 6.358c5.146.794 5.293 5.297 6.34 8.147c3.094 3.222 2.46-3.557 6.162.314c-2.342-3.449-12.406-9.719-4.303-7.708c-.043-3.472-1.466-6.271 1.017-6.203c2.458-4.452-2.575 10.977 2.966 5.319c1.534-.67 1.914-4.458 4.672.357c4.004 3.94 1.446 6.795-4.203 3.187c1.01 3.429 7.557 4.654 6.327 10.016c1.304 4.715 3.129 2.979 4.719 2.706c1.248 4.582 1.956 1.213 2.015-.968c5.713 1.223 4.375 4.6 6.162 6.959c3.936 1.777-5.634-12.044 1.124-4.156c7.11 6.42 2.666 9.1-3.714 8.071c4.038-.326 5.34 5.46 10.392 5.257c4.606 2.191 7.725 10.608-.215 7.104c-2.754-2.483-12.5-5.546-4.54-.823c7.352 3.404 13.191 5.441 20.282 9.714c5.074 3.623 7.266 7.772 9.19 8.593c-4.265 2.037-12.853-1.626-6.476-2.749c-3.977-.724-8.451-2.736-4.641 2.22c3.239 2.705 11.477 2.418 12.954 2.724c-1.252 2.759-3.4 2.978.051 3.192c-3.85 2.052 1.234 2.369 1.591 3.542m-7.873-22.234c-2.343-2.45-2.948-7.039-.416-3.046c1.298.521 4.16 7.498.416 3.046m25.641 16.287c1.461-.095.042 1.11 0 0m-29.34-22.294c-.09-3.704.847 2.856 0 0m-2.548-3.429c-2.947-5.693 3.714 1.612 0 0m-30.883-21.315c1.731-.462.852 2.961 0 0m24.579 13.322c1.063-3.992 1.249 3.35 0 0m-17.364-12.073c-1.224-2.203 2.56 2.066 0 0m14.902 4.777c-2.792-6.255 1.976-3.417.617 1.025zm-25.699-17.139c-1.248-2.051-3.312-8.072-2.648-9.91c.602 2.993 6.366 12.881 2.828 4.096c-3.91-7.364 4.673 2.391 5.556 4.227c.411 1.828-2.412-.499-.5 3.786c-3.488-4.878-2.059 2.694-5.236-2.199m-7.942-5.472c.327-4.771 1.818 3.271 0 0m3.573 1.229c1.704-3.6 2.89 5.02 0 0m-8.594-6.648c-2.957-2.938-5.097-5.646.138-1.823c2.017.079-4.481-6.16.486-1.981c5.223.952 2.58 8.564-.624 3.804m4.514-.118c1.717-1.701.912 1.676 0 0m2.778.891c-2.604-4.88 3.16 2.046 0 0m-5.522-5.277c-8.596-7.65 10.801 4 1.404 1.418zm24.629 14.31c-3.72-2.23-.986-15.702.282-6.488c3.617-1.17-.2 4.758 2.498 4.703c-.425 3.74-1.632 5.085-2.78 1.785m9.109 5.384c.365-4.06.768 2.776 0 0m-1.582-1.564c.41-1.734.042 2.043 0 0m-30.47-20.644c-5.522-7.619 16.05 7.707 3.537 1.933c-1.307-.342-2.88-.464-3.537-1.933m17.542 9.301c-.522-6.415 1.167 1.063 0 0m13.319 8.544c1.03-3.655.077 2.417 0 0m-30.015-20.753c3.282-.702 13.602 5.765 4.125 1.847c-1.053-1.165-3.298-.636-4.125-1.847m28.185 14.048c.35-6.56 1.959-3.919.012.939zm-25.742-16.33c1.338-1.962-3.55-8.87.705-2.478c1.838 1.461 5.322 2.447 2.246 3.062c4.838 4.268-1.18 1.156-2.95-.584m24.348 14.281c.924-7.473.815 4.378 0 0M69.67 99.463c1.02-.437.539 1.361 0 0m6.35 3.78c1.635-3.43 3.015 3.825 0 0m17.914 9.965c-.017-1.317.338 1.916 0 0m-1.037-2.297c-2.487-6.134 2.313 3.248 0 0m-1.527-4.022c-.417-2.535 1.418 3.184 0 0m2.485-4.039c-1.707-3.007 2.154-13.25 2.585-6.897c-1.8 4.95-.52 7.719.737 1.08c2.32-5.226-.501 10.311-3.322 5.817m2.553-15.234c.744-.913.165 1.1 0 0m-4.264 84.022c-1.011-.883.127.562 0 0m8.784 4.444c4.886 1.253 4.861-.761.445-1.359c-2.375-2.21-9.87-4.553-3.162-.274c.445 1.125 1.848 1.099 2.717 1.633M83.58 164.559c2.692 2.007 10.14 5.689 3.835.764c2.125-2.47-4.069-3.784-2.014-5.436c-5.227-3.198-4.123-2.914-.462-2.813c-6.28-2.808.907-2.598.569-4.036c-2.422-.479-12.03-4.271-6.378.311c-5.746-2.929-1.37 1.092-3.106.667c-5.875-1.603 5.233 4.474-.933 2.966c3.37 2.671 9.073 6.842 1.425 2.827c-1.008 1.45 5.473 3.649 7.064 4.75m9.187 5.278c11.171 3.599-5.477-4.398 0 0m47.029 28.49c.144-2.216-1.526 1.891 0 0m4.834 2.035c2.577-2.498.105 3.978 4.271-.612c.045-3.285-.129-5.226-4.787-1.235c-1.284.712-1.857 3.74.516 1.847M67.9 152.174c-.792-3.112-5.548-3.096 0 0m5.161 3.382c-1.916-3.178-6.839-2.877 0 0m29.364 17.709c2.867 2.546 13.168 1.868 3.483.313c-1.435-2.121-9.109-1.61-3.483-.313m40.367 24.929c4.412-3.702-4.276 1.652 0 0m9.176 6.306c.028-1.188-1.901.521 0 0m.015-1.663c4.886-5.177-4.735.306 0 0m-96.778-61.292c-4.165-5.942-2.59-8.613-6.605-13.464c-.76-3.71-6.89-12.13-3.17-3.21c3.406 5.216 4.419 13.293 9.775 16.674m95.245 59.646c8.989-5.81-3.69-2.531 0 0m6.862 2.689c4.502-3.866-2.847-.809 0 0M66.37 145.606c1.288-1.917-3.328-.246 0 0m89.509 56.438c4.359-2.81-1.004-2.379-.79.259zM96.725 164.76c-.15-1.898-2.301.161 0 0m3.656 2.103c-1.162-2.349-1.786.369 0 0m62.491 37.08c5.584-4.028-3.385-.771-1.172.763zm-2.138-1.033c4.549-3.812-4.803 1.689 0 0m10.925 7.275c3.054-2.045-3.711-.662 0 0m-102.49-65.962c4.095.918 16.361 10.083 9.125.634c-3.707-1.097-1.484-10.157-5.264-8.553c2.537 4.239 2.087 6.043-3.24 3.371c-6.696-3.269-3.763 1.619-2.455 2.967c-1.783.405 2.36 1.547 1.835 1.581m-18.651-14.73c.733-3.031-6.749-16.677-3.533-6.837c1.16 2.061 1.043 5.967 3.533 6.837m34.234 21.106c-2.108-1.763-.1-.249 0 0m5.192 1.209c-.003-3.212-5.739-1.304 0 0m44.987 28.36c-.858-2.194-3.392-.051 0 0m2.16 1.578c-.319-1.228-1.246.237 0 0m17.831 11.231c1.715-1.267-2.14-.161 0 0m-95.087-61.105c4.905-1.9-5.256-1.355 0 0m71.135 44.816c-.054-3.176-3.127.787 0 0m-73.073-49.333c3.15-1.064-2.915-.701 0 0m9.145 4.431c-.057-1.044-.967.395 0 0m111.551 68.404c4.052-.821 13.285 2.062 14.778-1.074c-4.921-.12-17.024-3.472-17.597.8l1.078.169zM69.949 132.518c.07-3.218-2.51-.12 0 0m-24.046-16.68c-1.093-6.132-4.154-.928 0 0m5.734 1.441c.07-1.969-5.249-1.772 0 0m3.277 1.609c-.948-.767-.742.97 0 0m20.619 13.227c.97-.891-2.299-.66 0 0M52.73 115.259c-.554-4.631-6.641-.694 0 0m-11.756-7.628c-.167-2.138-1.146.806 0 0m1.749-1.321c-.286-2.534-1.502.322 0 0m9.662 5.767c4.085-1.605-7.442-3.319-.835-.303zm129.308 79.872c2.615-2.397-3.323-.741 0 0m15.622 8.098c1.048-3.1-2.639.408 0 0M53.373 107.013c.43-2.998-3.24.595 0 0m-13.746-9.21c-.739-4.233-.638-11.664 6.425-9.153c-9.428 1.872 6.526 11.719 4.511 3.945c3.965.194 7.756-2.343 5.675 1.507c7.811-.863 13.227-7.636 20.772-6.687c5.877-.778 12.303-1.368 18.636-3.733c5.207-.376 10.22-5.982 7.366-9.305c-7.101-.6-14.535.288-22.384 1.848c-8.697 1.808-16.597 5.243-25.373 6.718c-8.554 1.149 1.72 3.165-.73 3.615c-4.463 1.548 5.323 2.593-.578 4.225c-3.645-.693-7.439-1.945-5.882-5.786c-8.194 1.063-15.393 4.464-8.92 12.802zM59.37 87.748c1.921-7.078 10.293 5.823 3.15.94c-.854-.639-2.257-1.16-3.15-.94m.374-3.432c2.773-2.065 1.474 1.158 0 0m3.52.056c.251-3.256 8.06 1.724 1.288 1.173zm4.817-1.936c1.759-2.055.505 1.828 0 0m1.232-.825c2.928-3.519 16.584-2.246 6.589-.343c-2.68-2.017-4.733 1.189-6.59.343m17.821-2.747c-.445-9.612 8.854 3.415 0 0m5.057-.028c1.849-4.844 7.174-1.944.855-.973c.138.515-.185 2.5-.855.973m-40.812 25.691c5.524-3.383-5.864-2.935 0 0m4.084 1.134c1.937-2.059-4.208-.835 0 0m-12.034-8.54c3.156-2.425-3.735-.922 0 0m163.107 102.04c.092-2.813-2.412 1.267 0 0m-16.573-11.311c.471-3.238-2.13.283 0 0m21.131 12.401c4.413.015 13.371-1.37 3.769-1.366c-1.507.235-8.779.185-3.769 1.366M59.056 103.676c3.571-.245 5.588-3.94-.69-3.727c-9.731-1.007 8.584 3.332-1.25 2.091c-1.32.875 1.863 1.878 1.94 1.636m3.145 1.592c-.373-2.293-1.104 1.219 0 0m3.731-9.949c1.55-1.922-2.144-.514 0 0M54.055 75.465c6.374-2.168 15.09-4.605 18.1 1.068c-3.063-3.687-1.236-7.316 1.656-1.926c4.091 5.454 6.139-2.48 3.478-4.31c3.032 3.768 6.48 5.548 2.03.239c4.837-5.818-9.683.761-12.983.695c-1.588.713-16.394 3.776-12.281 4.234m3.735-7.154c3.635-2.744 12.573 1.632 6.838-2.727c-.561-.495-12.56 3.305-6.838 2.727m13.253.547c4.254.109-1.835-5.715 3.234-3.076c-.832-2.72-5.902-3.23-8.38-4.316c-1.403 2.486 2.853 7.425 5.146 7.392m-10.929-12.03c1.472-1.995-2.58 1.011 0 0m5.417 1.296c6.856-.909-1.748-2.952-1.382-.073zm-10.114-7.913c-4.828-6.302 9.078 1.059 4.174-5.54c-4.128-3.286-8.095 3.7-4.174 5.54m61.952 33.369c2.214-3.925-9.141-5.29-1.492-1.391c.705.235.545 1.662 1.492 1.39"
          />
        </g>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
      >
        <rect width="128" height="128" fill="none" />
        <path fill="#f0db4f" d="M1.408 1.408h125.184v125.185H1.408z" />
        <path
          fill="#323330"
          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"
        />
      </svg>
    )
  },
  {
    name: 'TypeScript',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
      >
        <rect width="128" height="128" fill="none" />
        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
        <path
          fill="#007acc"
          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
        />
      </svg>
    )
  },
  {
    name: 'React',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
      >
        <rect width="128" height="128" fill="none" />
        <g fill="#61dafb">
          <circle cx="64" cy="64" r="11.4" />
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4" />
        </g>
      </svg>
    )
  },
  {
    name: 'Vue',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
      >
        <rect width="128" height="128" fill="none" />
        <path
          fill="none"
          d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
        />
        <path
          fill="#35495e"
          d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"
        />
        <path
          fill="#41b883"
          d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"
        />
      </svg>
    )
  },
  {
    name: 'Express',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="256"
        height="256"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none" />
        <g fill="none">
          <rect width="256" height="256" fill="#0a0a0a" rx="60" />
          <path
            fill="#fff"
            d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"
          />
        </g>
      </svg>
    )
  },
  {
    name: 'Java',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
      >
        <rect width="128" height="128" fill="none" />
        <path
          fill="#0074bd"
          d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092c0 0 2.871 1.795 6.873 3.351c-24.439 10.47-55.308-.607-36.115-5.969m-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6c0 0 1.993 2.025 5.132 3.131c-29.542 8.64-62.446.68-41.309-6.336"
        />
        <path
          fill="#ea2d2e"
          d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58c0 .001-42.731 10.67-22.324 34.187"
        />
        <path
          fill="#0074bd"
          d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171c-4.451-1.938 3.899-4.625 6.526-5.192c2.739-.593 4.303-.485 4.303-.485c-4.953-3.487-32.013 6.85-13.743 9.815c49.821 8.076 90.817-3.637 77.896-9.468M49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326c9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958c10.832-5.239 19.644-4.643 19.644-4.643m40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285c-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725c0-.002.359-.327.468-.617"
        />
        <path
          fill="#ea2d2e"
          d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559c-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587"
        />
        <path
          fill="#0074bd"
          d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436c0 0-1.571 4.032-18.577 7.231c-19.186 3.612-42.854 3.191-56.887.874c0 .001 2.875 2.381 17.647 3.331"
        />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
      >
        <rect width="128" height="128" fill="none" />
        <path
          fill="#439934"
          fill-rule="evenodd"
          d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296c.472 6.095.256 12.147-1.029 18.142c-.035.165-.109.32-.164.48c-.403.001-.814-.049-1.208.012c-3.329.523-6.655 1.065-9.981 1.604c-3.438.557-6.881 1.092-10.313 1.687c-1.216.21-2.721-.041-3.212 1.641c-.014.046-.154.054-.235.08l.166-10.051l-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281c3.129-.497 6.261-.98 9.392-1.465c1.381-.215 2.764-.412 4.148-.618"
          clip-rule="evenodd"
        />
        <path
          fill="#45a538"
          fill-rule="evenodd"
          d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37c-8.717-8.222-15.093-17.899-18.233-29.566c-.865-3.211-1.442-6.474-1.627-9.792c-.13-2.322-.318-4.665-.154-6.975c.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702q2.638 7.77 5.242 15.551c5.458 16.3 10.909 32.604 16.376 48.9c.107.318.384.579.583.866z"
          clip-rule="evenodd"
        />
        <path
          fill="#46a037"
          fill-rule="evenodd"
          d="M88.038 42.812c-1.384.206-2.768.403-4.149.616c-3.131.485-6.263.968-9.392 1.465c-2.622.417-5.242.852-7.862 1.281l-1.602.275l-.012-1.045c-.053-.859-.144-1.717-.154-2.576c-.069-5.478-.112-10.956-.18-16.434c-.042-3.429-.105-6.857-.175-10.285c-.043-2.13-.089-4.261-.185-6.388c-.052-1.143-.236-2.28-.311-3.423c-.042-.657.016-1.319.029-1.979c.817 1.583 1.616 3.178 2.456 4.749c1.327 2.484 3.441 4.314 5.344 6.311c7.523 7.892 12.864 17.068 16.193 27.433"
          clip-rule="evenodd"
        />
        <path
          fill="#409433"
          fill-rule="evenodd"
          d="M65.036 80.753c.081-.026.222-.034.235-.08c.491-1.682 1.996-1.431 3.212-1.641c3.432-.594 6.875-1.13 10.313-1.687c3.326-.539 6.652-1.081 9.981-1.604c.394-.062.805-.011 1.208-.012c-.622 2.22-1.112 4.488-1.901 6.647c-.896 2.449-1.98 4.839-3.131 7.182a49 49 0 0 1-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548c-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23l-1.214-1.038l-1.256-2.753a41.4 41.4 0 0 1-1.394-9.838l.023-.561l.171-2.426c.057-.828.133-1.655.168-2.485c.129-2.982.241-5.964.359-8.946"
          clip-rule="evenodd"
        />
        <path
          fill="#4faa41"
          fill-rule="evenodd"
          d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947c-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913c-2.75-8.209-5.467-16.431-8.213-24.642a4499 4499 0 0 0-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6168 6168 0 0 1 6.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198c.116.349.308.671.491 1.062l.67-.78z"
          clip-rule="evenodd"
        />
        <path
          fill="#4aa73c"
          fill-rule="evenodd"
          d="M43.155 32.227c.21.274.511.516.617.826a4499 4499 0 0 1 6.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642c1.662 4.961 3.362 9.911 5.062 14.913l.765-.289l-.171 2.426l-.155.559c-.266 2.656-.49 5.318-.814 7.968c-.163 1.328-.509 2.632-.772 3.947c-.198-.287-.476-.548-.583-.866c-5.467-16.297-10.918-32.6-16.376-48.9a3889 3889 0 0 0-5.242-15.551c-.089-.263-.34-.469-.516-.702z"
          clip-rule="evenodd"
        />
        <path
          fill="#57ae47"
          fill-rule="evenodd"
          d="m65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062c-2.913-8.731-5.812-17.468-8.728-26.198a6168 6168 0 0 0-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769q2.52 7.382 5.003 14.778c1.547 4.604 3.071 9.215 4.636 13.813c.105.308.47.526.714.786l.012 1.045q.087 12.124.171 24.251"
          clip-rule="evenodd"
        />
        <path
          fill="#60b24f"
          fill-rule="evenodd"
          d="M65.021 45.404c-.244-.26-.609-.478-.714-.786c-1.565-4.598-3.089-9.209-4.636-13.813q-2.483-7.395-5.003-14.778c-.099-.287-.371-.514-.562-.769c1.969-1.928 3.877-3.925 5.925-5.764c1.821-1.634 3.285-3.386 3.352-5.968c.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979c.075 1.143.259 2.28.311 3.423c.096 2.127.142 4.258.185 6.388c.069 3.428.132 6.856.175 10.285c.067 5.478.111 10.956.18 16.434c.008.861.098 1.718.152 2.577"
          clip-rule="evenodd"
        />
        <path
          fill="#a9aa88"
          fill-rule="evenodd"
          d="M62.598 107.085c.263-1.315.609-2.62.772-3.947c.325-2.649.548-5.312.814-7.968l.066-.01l.066.011a41.4 41.4 0 0 0 1.394 9.838c-.176.232-.425.439-.518.701c-.727 2.05-1.412 4.116-2.143 6.166c-.1.28-.378.498-.574.744l-.747-2.566z"
          clip-rule="evenodd"
        />
        <path
          fill="#b6b598"
          fill-rule="evenodd"
          d="M62.476 112.621c.196-.246.475-.464.574-.744c.731-2.05 1.417-4.115 2.143-6.166c.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722z"
          clip-rule="evenodd"
        />
        <path
          fill="#c2c1a7"
          fill-rule="evenodd"
          d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624c-.839 2.403-1.64 4.819-2.485 7.222c-.107.305-.404.544-.614.812q-.164-2.079-.331-4.158"
          clip-rule="evenodd"
        />
        <path
          fill="#cecdb7"
          fill-rule="evenodd"
          d="M63.503 120.763c.209-.269.506-.508.614-.812c.845-2.402 1.646-4.818 2.485-7.222c.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477c-.575 1.614-1.117 3.24-1.694 4.854c-.119.333-.347.627-.525.938c-.158-.207-.441-.407-.454-.623c-.051-.841-.016-1.688-.013-2.533"
          clip-rule="evenodd"
        />
        <path
          fill="#dbdac7"
          fill-rule="evenodd"
          d="M63.969 123.919c.178-.312.406-.606.525-.938c.578-1.613 1.119-3.239 1.694-4.854c.065-.183.263-.319.398-.477l.012 3.64l-1.218 3.124z"
          clip-rule="evenodd"
        />
        <path
          fill="#ebe9dc"
          fill-rule="evenodd"
          d="m65.38 124.415l1.218-3.124l.251 3.696z"
          clip-rule="evenodd"
        />
        <path
          fill="#cecdb7"
          fill-rule="evenodd"
          d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23z"
          clip-rule="evenodd"
        />
        <path
          fill="#4faa41"
          fill-rule="evenodd"
          d="m64.316 95.172l-.066-.011l-.066.01l.155-.559z"
          clip-rule="evenodd"
        />
      </svg>
    )
  },
  {
    name: 'PostgreSQL',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
      >
        <rect width="128" height="128" fill="none" />
        <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938c6.191-2.873 9.861-7.668 3.758-6.409c-13.924 2.873-14.881-1.842-14.881-1.842c14.703-21.815 20.849-49.508 15.543-56.287c-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968c-6.301-.104-11.082 1.652-14.709 4.402c0 0-44.683-18.409-42.604 23.151c.442 8.841 12.672 66.898 27.26 49.362c5.332-6.412 10.484-11.834 10.484-11.834c2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497c-3.757 4.199-2.653 4.936-10.166 6.482c-7.602 1.566-3.136 4.355-.221 5.084c3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69c.209 5.214.558 10.079 1.621 12.948s2.317 10.256 12.191 8.14c8.252-1.764 14.561-4.309 15.136-27.985" />
        <path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32c-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419c-.038-.935-.064-1.898-.093-2.919c-.021-.747-.047-1.684-.085-2.664a18.8 18.8 0 0 1-4.962 1.568c-3.079.526-6.389.356-9.84-.507c-2.435-.609-4.965-1.871-6.407-3.82c-4.203 3.681-8.212 3.182-10.396 2.453c-3.853-1.285-7.301-4.896-10.542-11.037c-2.309-4.375-4.542-10.075-6.638-16.943c-3.65-11.96-5.969-24.557-6.175-28.693C4.292 23.698 7.777 14.44 15.296 9.129C27.157.751 45.128 5.678 51.68 7.915c4.402-2.653 9.581-3.944 15.433-3.851c3.143.051 6.136.327 8.916.823c2.9-.912 8.628-2.221 15.185-2.139c12.081.144 22.092 4.852 28.949 13.615c4.894 6.252 2.474 19.381.597 26.651c-2.642 10.226-7.271 21.102-12.957 30.57c1.544.011 3.781-.174 6.961-.831c6.274-1.295 8.109 2.069 8.607 3.575c1.995 6.042-6.677 10.608-9.382 11.864c-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013l-1.216-.107l-.12 1.014l-.116.991c-.311 11.999-2.025 19.598-5.552 24.619c-3.697 5.264-8.835 6.739-13.361 7.709c-1.544.33-2.947.474-4.219.474m-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434c.028.99.054 1.927.089 2.802c.106 2.65.355 8.855 1.327 11.477c.137.371.26.747.39 1.146c1.083 3.316 1.626 4.979 6.309 3.978c3.931-.843 5.952-1.599 7.534-3.851c2.299-3.274 3.585-9.86 3.821-19.575l4.783.116l-4.75-.57l.14-1.186c.455-3.91.783-6.734 3.396-8.602c2.097-1.498 4.486-1.353 6.389-1.01c-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965l1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304c2.906-11.251 2.02-17.226 1.134-18.356c-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194l-1.8.335l-.922-.191c-2.542-.528-5.366-.82-8.393-.869c-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655l-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721c-4.656 3.298-6.777 9.76-6.305 19.207c.156 3.119 2.275 14.926 5.771 26.377c4.831 15.825 9.221 21.082 11.054 21.693c.32.108 1.15-.537 1.976-1.529a271 271 0 0 1 10.694-12.07l2.77-2.915l3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812l-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238l-1.51 1.688l-.174.196l4.388 2.025z" />
        <path
          fill="#336791"
          d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842c14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967c-6.301-.103-11.08 1.652-14.707 4.402c0 0-44.684-18.408-42.606 23.151c.442 8.842 12.672 66.899 27.26 49.363c5.332-6.412 10.483-11.834 10.483-11.834c2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497c-3.758 4.199-2.654 4.936-10.167 6.482c-7.602 1.566-3.136 4.355-.22 5.084c3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557s-.29 9.926.871 13.082c1.16 3.156 2.316 10.256 12.192 8.14c8.252-1.768 12.528-6.351 13.124-13.995c.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938c6.19-2.871 9.861-7.667 3.758-6.408"
        />
        <path
          fill="#fff"
          d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185c-1.562-3.907-1.899-19.069-1.551-31.503a1.59 1.59 0 0 1 1.64-1.55a1.594 1.594 0 0 1 1.55 1.639c-.401 14.341.168 27.337 1.324 30.229c1.804 4.509 4.54 8.453 12.275 6.796c7.343-1.575 10.093-4.359 11.318-11.46c.94-5.449 2.799-20.951 3.028-24.01a1.593 1.593 0 0 1 1.71-1.472a1.597 1.597 0 0 1 1.472 1.71c-.239 3.185-2.089 18.657-3.065 24.315c-1.446 8.387-5.185 12.191-13.794 14.037c-1.463.313-2.792.453-4 .454M31.321 90.466a6.7 6.7 0 0 1-2.116-.35c-5.347-1.784-10.44-10.492-15.138-25.885c-3.576-11.717-5.842-23.947-6.041-27.922c-.589-11.784 2.445-20.121 9.02-24.778c13.007-9.216 34.888-.44 35.813-.062a1.596 1.596 0 0 1-1.207 2.955c-.211-.086-21.193-8.492-32.768-.285c-5.622 3.986-8.203 11.392-7.672 22.011c.167 3.349 2.284 15.285 5.906 27.149c4.194 13.742 8.967 22.413 13.096 23.79c.648.216 2.62.873 5.439-2.517A245 245 0 0 1 45.88 73.046a1.596 1.596 0 0 1 2.304 2.208c-.048.05-4.847 5.067-10.077 11.359c-2.477 2.979-4.851 3.853-6.786 3.853m69.429-13.445a1.596 1.596 0 0 1-1.322-2.487c14.863-22.055 20.08-48.704 15.612-54.414c-5.624-7.186-13.565-10.939-23.604-11.156c-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849a1.6 1.6 0 0 1 .631-2.025c.046-.027.192-.089.429-.176l-.021.006l.021-.007c1.641-.601 7.639-2.4 15.068-2.315c11.108.118 20.284 4.401 26.534 12.388c2.957 3.779 2.964 12.485.019 23.887c-3.002 11.625-8.651 24.118-15.497 34.277c-.306.457-.81.703-1.323.703m.76 10.21c-2.538 0-4.813-.358-6.175-1.174c-1.4-.839-1.667-1.979-1.702-2.584c-.382-6.71 3.32-7.878 5.208-8.411c-.263-.398-.637-.866-1.024-1.349c-1.101-1.376-2.609-3.26-3.771-6.078c-.182-.44-.752-1.463-1.412-2.648c-3.579-6.418-11.026-19.773-6.242-26.612c2.214-3.165 6.623-4.411 13.119-3.716C97.6 28.837 88.5 10.625 66.907 10.271c-6.494-.108-11.82 1.889-15.822 5.93c-8.96 9.049-8.636 25.422-8.631 25.586a1.595 1.595 0 1 1-3.19.084c-.02-.727-.354-17.909 9.554-27.916C53.455 9.272 59.559 6.96 66.96 7.081c13.814.227 22.706 7.25 27.732 13.101c5.479 6.377 8.165 13.411 8.386 15.759c.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104c-3.639 5.201 3.406 17.834 6.414 23.229c.768 1.376 1.322 2.371 1.576 2.985c.988 2.396 2.277 4.006 3.312 5.3c.911 1.138 1.7 2.125 1.982 3.283c.131.23 1.99 2.98 13.021.703c2.765-.57 4.423-.083 4.93 1.45c.997 3.015-4.597 6.532-7.694 7.97c-2.775 1.29-7.204 2.106-11.036 2.106m-4.696-4.021c.35.353 2.101.962 5.727.806c3.224-.138 6.624-.839 8.664-1.786c2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577a6 6 0 0 1-.54-.401c-.302.119-.581.197-.78.253c-1.58.443-3.214.902-2.996 5.105m-45.562 8.915c-1.752 0-3.596-.239-5.479-.71c-1.951-.488-5.24-1.957-5.19-4.37c.057-2.707 3.994-3.519 5.476-3.824c5.354-1.103 5.703-1.545 7.376-3.67c.488-.619 1.095-1.39 1.923-2.314c1.229-1.376 2.572-2.073 3.992-2.073c.989 0 1.8.335 2.336.558c1.708.708 3.133 2.42 3.719 4.467c.529 1.847.276 3.625-.71 5.006c-3.237 4.533-7.886 6.93-13.443 6.93m-7.222-4.943c.481.372 1.445.869 2.518 1.137c1.631.408 3.213.615 4.705.615c4.546 0 8.196-1.882 10.847-5.594c.553-.774.387-1.757.239-2.274c-.31-1.083-1.08-2.068-1.873-2.397c-.43-.178-.787-.314-1.115-.314c-.176 0-.712 0-1.614 1.009a41 41 0 0 0-1.794 2.162c-2.084 2.646-3.039 3.544-9.239 4.821c-1.513.31-2.289.626-2.674.835m12.269-7.36a1.596 1.596 0 0 1-1.575-1.354a8 8 0 0 1-.08-.799c-4.064-.076-7.985-1.82-10.962-4.926c-3.764-3.927-5.477-9.368-4.699-14.927c.845-6.037.529-11.366.359-14.229c-.047-.796-.081-1.371-.079-1.769c.003-.505.013-1.844 4.489-4.113c1.592-.807 4.784-2.215 8.271-2.576c5.777-.597 9.585 1.976 10.725 7.246c3.077 14.228.244 20.521-1.825 25.117c-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354a1.595 1.595 0 0 1-1.335 1.819zM42.464 42.26l.062 1.139c.176 2.974.504 8.508-.384 14.86c-.641 4.585.759 9.06 3.843 12.276c2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646c1.991-4.424 4.47-9.931 1.615-23.132c-.565-2.615-1.936-4.128-4.189-4.627c-4.628-1.022-11.525 2.459-12.974 3.837m9.63-.677c-.08.564 1.033 2.07 2.485 2.271c1.449.203 2.689-.975 2.768-1.539s-1.033-1.186-2.485-1.388s-2.691.092-2.768.656m2.818 2.826l-.407-.028c-.9-.125-1.81-.692-2.433-1.518c-.219-.29-.576-.852-.505-1.354c.101-.736.999-1.177 2.4-1.177c.313 0 .639.023.967.069c.766.106 1.477.327 2.002.62c.91.508.977 1.075.936 1.368c-.112.813-1.405 2.02-2.96 2.02m-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082c-.096-.182-.762-.634-2.025-.81a6 6 0 0 0-.821-.059c-.812 0-1.243.183-1.345.282m43.605-1.245c.079.564-1.033 2.07-2.484 2.272c-1.45.202-2.691-.975-2.771-1.539c-.076-.564 1.036-1.187 2.486-1.388c1.45-.203 2.689.092 2.769.655m-2.819 2.56c-1.396 0-2.601-1.086-2.7-1.791c-.115-.846 1.278-1.489 2.712-1.688c.316-.044.629-.066.93-.066c1.238 0 2.058.363 2.14.949c.053.379-.238.964-.739 1.492c-.331.347-1.026.948-1.973 1.079zm.943-3.013q-.416 0-.856.061c-1.441.201-2.301.779-2.259 1.089c.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919c.443-.465.619-.903.598-1.052c-.028-.198-.56-.49-1.613-.49m3.965 32.843a1.594 1.594 0 0 1-1.324-2.483c3.398-5.075 2.776-10.25 2.175-15.255c-.257-2.132-.521-4.337-.453-6.453c.07-2.177.347-3.973.614-5.71c.317-2.058.617-4.002.493-6.31a1.595 1.595 0 1 1 3.186-.172c.142 2.638-.197 4.838-.525 6.967c-.253 1.643-.515 3.342-.578 5.327c-.061 1.874.178 3.864.431 5.97c.64 5.322 1.365 11.354-2.691 17.411a1.6 1.6 0 0 1-1.328.708"
        />
      </svg>
    )
  }
]

export default skills