import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import TimelineCard from './TimelineCard';

const CarouselRoot = styled(Box)({
    position: 'relative',
    width: '100%'
});

const Track = styled(Box)({
    display: 'flex',
    gap: '20px',
    transition: 'transform 300ms ease',
    willChange: 'transform',
    justifyContent: 'center',
    alignItems: 'center'
});

const Viewport = styled(Box)({
    overflow: 'hidden',
    width: '100%'
});

const NavBtn = styled(IconButton)({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#ffd700',
    background: 'rgba(255,215,0,0.08)',
    border: '1px solid rgba(255,215,0,0.2)',
    '&:hover': { background: 'rgba(255,215,0,0.15)' }
});

const LeftBtn = styled(NavBtn)({
    left: -8
});

const RightBtn = styled(NavBtn)({
    right: -8
});

const ItemWrap = styled(Box)({
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

const TimelineCarousel = ({ milestones = [] }) => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
    const cardsPerView = useMemo(() => {
        if (isSm) return 1;
        if (isMd) return 2;
        // Show all cards if we have 2 or fewer, otherwise show 3
        return milestones.length <= 2 ? milestones.length : 3;
    }, [isSm, isMd, milestones.length]);

    const [index, setIndex] = useState(0);
    const viewportRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);

    const recalc = useCallback(() => {
        if (!viewportRef.current) return;
        const vw = viewportRef.current.clientWidth;
        const gapTotal = (cardsPerView - 1) * 20; // 20px gap
        const width = Math.max(0, Math.floor((vw - gapTotal) / cardsPerView));
        setItemWidth(width);
    }, [cardsPerView]);

    useEffect(() => {
        recalc();
        const obs = new ResizeObserver(recalc);
        if (viewportRef.current) obs.observe(viewportRef.current);
        return () => obs.disconnect();
    }, [recalc]);

    useEffect(() => {
        const maxIndex = Math.max(0, milestones.length - cardsPerView);
        setIndex((prev) => Math.min(prev, maxIndex));
    }, [cardsPerView, milestones.length]);

    const maxIndex = Math.max(0, milestones.length - cardsPerView);
    const canPrev = index > 0;
    const canNext = index < maxIndex;

    const prev = () => canPrev && setIndex((v) => v - 1);
    const next = () => canNext && setIndex((v) => v + 1);

    const translateX = -(index * (itemWidth + 20));

    return (
        <CarouselRoot>
            <Viewport ref={viewportRef}>
                <Track sx={{ transform: `translateX(${translateX}px)` }}>
                    {milestones.map((m, i) => (
                        <ItemWrap key={i} sx={{ width: itemWidth }}>
                            <TimelineCard year={m.year} title={m.title} description={m.description} />
                        </ItemWrap>
                    ))}
                </Track>
            </Viewport>

            {canPrev && (
                <LeftBtn aria-label="Previous" onClick={prev} size="small">
                    <MdChevronLeft size={22} />
                </LeftBtn>
            )}
            {canNext && (
                <RightBtn aria-label="Next" onClick={next} size="small">
                    <MdChevronRight size={22} />
                </RightBtn>
            )}
        </CarouselRoot>
    );
};

export default TimelineCarousel;


