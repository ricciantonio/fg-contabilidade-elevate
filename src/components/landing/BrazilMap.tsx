const markers = [
  { cx: 580, cy: 620, label: "SP" },
  { cx: 620, cy: 600, label: "RJ" },
  { cx: 600, cy: 540, label: "MG" },
  { cx: 680, cy: 480, label: "BA" },
  { cx: 760, cy: 390, label: "PE" },
  { cx: 740, cy: 340, label: "CE" },
  { cx: 560, cy: 310, label: "PA" },
  { cx: 480, cy: 280, label: "AM" },
  { cx: 600, cy: 520, label: "DF" },
  { cx: 540, cy: 780, label: "RS" },
  { cx: 560, cy: 700, label: "PR" },
  { cx: 570, cy: 740, label: "SC" },
  { cx: 660, cy: 320, label: "MA" },
];

export function BrazilMap() {
  return (
    <div className="relative w-full max-w-[520px]">
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-label="Mapa do Brasil com marcadores nos estados atendidos"
        role="img"
      >
        <defs>
          <linearGradient id="brazilGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Simplified Brazil silhouette */}
        <path
          d="M560,180 C580,170 610,175 630,190 C650,205 660,230 655,255 C660,260 670,265 680,270 C700,280 720,290 735,305 C750,320 760,340 765,360 C770,380 770,400 765,420 C760,440 750,455 740,470 C745,490 745,510 740,530 C735,550 725,570 710,585 C700,600 685,615 670,625 C660,640 650,655 640,670 C630,690 620,710 610,730 C600,755 590,780 575,800 C560,820 540,835 520,840 C500,845 480,840 465,830 C450,820 440,805 435,790 C430,775 430,760 435,745 C430,730 425,715 420,700 C415,680 410,660 405,640 C400,620 395,600 390,580 C385,560 380,540 375,520 C370,500 365,480 360,460 C355,440 350,420 345,400 C340,380 335,360 330,340 C325,320 320,300 315,280 C310,260 305,240 300,220 C295,200 290,180 285,160 C280,140 275,120 270,100 C275,90 285,85 295,85 C305,85 315,90 325,95 C335,100 345,105 355,110 C365,115 375,120 385,125 C395,130 405,135 415,140 C425,145 435,150 445,155 C455,160 465,165 475,170 C485,175 495,180 505,185 C515,190 525,195 535,200 C545,195 552,188 560,180 Z"
          fill="url(#brazilGradient)"
          stroke="#334155"
          strokeWidth="2"
        />

        {/* State division hints (subtle) */}
        <path
          d="M560,180 Q600,250 620,350 M620,350 Q640,450 650,550 M650,550 Q660,650 610,730 M435,745 Q480,700 520,650 M520,650 Q560,600 580,520 M580,520 Q600,440 620,350"
          stroke="#334155"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
        />

        {markers.map((m) => (
          <g key={m.label}>
            <circle cx={m.cx} cy={m.cy} r="14" fill="#3B82F6" fillOpacity="0.25">
              <animate
                attributeName="r"
                values="14;22;14"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fillOpacity"
                values="0.25;0.05;0.25"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={m.cx}
              cy={m.cy}
              r="6"
              fill="#3B82F6"
              filter="url(#glow)"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
