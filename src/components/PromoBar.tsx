'use client'

export function PromoBar() {
  return (
    <>
      {/* Mobile promo bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[10000] bg-[#F2B94B] text-[#1F2933]">
        <div 
          className="h-[calc(40px+env(safe-area-inset-top))] px-4 flex items-center justify-between"
          style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
        >
          <span className="text-xs truncate flex-1">Concept demo</span>
          <span className="text-xs font-medium mx-4 flex-shrink-0">Dezvoltat de sky.ro</span>
          <a 
            href="tel:+40720088880" 
            className="text-xs flex-shrink-0"
          >
            +4 0720 088 880
          </a>
        </div>
        {/* 1px bottom border */}
        <div className="h-px bg-[#1F2933]/10" />
      </div>

      {/* Desktop/Tablet promo bar */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-[10000] bg-[#F2B94B] text-[#1F2933] items-center justify-center">
        <div 
          className="h-[calc(40px+env(safe-area-inset-top))] px-6 flex items-center gap-3 text-sm"
          style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
        >
          <span>Concept demo</span>
          <span className="text-[#1F2933]/40">•</span>
          <span>Conținut orientativ</span>
          <span className="text-[#1F2933]/40">•</span>
          <span>Dezvoltat de sky.ro</span>
          <span className="text-[#1F2933]/40">•</span>
          <a 
            href="mailto:dan.trifan@sky.ro" 
            className="hover:underline"
          >
            dan.trifan@sky.ro
          </a>
          <span className="text-[#1F2933]/40">•</span>
          <a 
            href="tel:+40720088880" 
            className="hover:underline"
          >
            +4 0720 088 880
          </a>
          <a 
            href="https://sky.ro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 px-4 py-1.5 bg-[#2F80ED] text-white rounded-md hover:bg-[#2563eb] transition-colors font-normal"
          >
            Vizitează sky.ro
          </a>
        </div>
        {/* 1px bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1F2933]/10" />
      </div>
    </>
  )
}
