"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    getScrollStagesDemo(res) {
        res.type('html').send(`


      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Stages Animation Demo</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            background: #0b1d13;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            min-height: 100vh;
            overflow: hidden;
            width: 100vw;
            height: 100vh;
            color:rgb(200, 247, 100);
            letter-spacing: 0.01em;
          }
          body {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background: linear-gradient(120deg, #0b1d13 60%, #183c2b 100%);
          }
          .stage-header {
            position: fixed;
            top: 32px;
            left: 48px;
            z-index: 100;
            display: flex;
            gap: 32px;
            font-size: 3.2rem;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: 700;
            letter-spacing: 0.04em;
            user-select: none;
            text-shadow: 0 2px 24px rgba(21, 50, 10, 0.67), 0 1px 0 #0008;
          }
          .stage-word {
            color:rgb(175, 245, 78);
            transition: color 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1);
            opacity: 0.8;
            cursor: pointer;
            position: relative;
            padding-bottom: 8px;
            text-shadow: 0 2px 8px #1e402322;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          }
          .stage-underline {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 4px;
            width: 100%;
            background: linear-gradient(90deg,rgb(204, 227, 70) 0%,rgb(244, 251, 120) 100%);
            border-radius: 2px;
            transform: scaleX(0);
            transform-origin: left;
            transition: none;
            z-index: 10;
          }
          .stage-word.active {
            color:rgb(231, 245, 83);
            opacity: 1;
            text-shadow: 0 2px 24pxrgba(230, 244, 84, 0.8), 0 1px 0 #0008;
          }
          .stage-content-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          .stage-section {
            display: flex;
            flex-direction: row;
            width: 100vw;
            height: 100vh;
            align-items: center;
            justify-content: center;
            vertical-align: top;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            pointer-events: none;
            z-index: 1;
          }
          .stage-section.active {
            opacity: 1;
            pointer-events: auto;
            z-index: 2;
            transition: none;
          }
          .stage-left {
            flex: 1 1 0;
            min-width: 0;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background: rgba(11, 29, 19, 0.92);
            padding: 0 0 0 8vw;
            transition: background 0.7s cubic-bezier(0.4,0,0.2,1);
            min-height: 100vh;
            position: relative;
          }
          .stage-desc {
            max-width: 400px;
            font-size: 1.1rem;
            color:rgb(226, 225, 182);
            line-height: 1.7;
            opacity: 1;
            transition: none;
            position: absolute;
            left: 48px;
            bottom: 88px;
            top: auto;
            transform: none;
            pointer-events: auto;
            will-change: opacity, transform;
            text-shadow: 0 2px 16px #3be07a22;
            font-weight: 400;
            font-family: 'Playfair Display', 'Merriweather', serif;
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .desc-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: #e7f553;
            margin-bottom: 0.4em;
            line-height: 1.1;
            letter-spacing: 0.01em;
            font-family: 'Playfair Display', 'Merriweather', serif;
            font-style: italic;
          }
          .desc-subtext {
            font-size: 1.1rem;
            color:rgb(245, 248, 89);
            font-weight: 400;
            opacity: 0.92;
            line-height: 1.7;
            margin-top: 0.1em;
            font-family: 'Playfair Display', 'Merriweather', serif;
          }
          .stage-right {
            flex: 1 1 0;
            min-width: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background: rgba(13, 31, 21, 0.98);
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            border-top-right-radius: 32px;
            border-bottom-right-radius: 32px;
          }
          .stage-image-container {
            border-radius: 32px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible;
            background: linear-gradient(120deg, #0b1d13 60%,rgba(10, 28, 17, 0.13) 100%);
          }
          .stage-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            box-shadow: 0 8px 32px #000a;
            opacity: 1;
            transform: scale(1);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
            z-index: 1;
            will-change: opacity, transform;
            /* border-radius will be handled by GSAP */
          }
          .stage-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
            width: 110px;
            height: 110px;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            transition: none;
            will-change: opacity, transform;
            background: none;
            border-radius: 0;
            box-shadow: none;
            padding: 0;
          }
          .stage-icon img {
            width: 80px;
            height: 80px;
            background: none;
            border-radius: 0;
            box-shadow: none;
          }
          .learn-more-tab {
            position: fixed;
            left: 50%;
            bottom: 48px;
            transform: translateX(-50%);
            background: #fff;
            color: #18181a;
            font-size: 1.15rem;
            font-weight: 600;
            border-radius: 24px;
            padding: 16px 40px;
            box-shadow: 0 4px 24px #0002;
            z-index: 200;
            cursor: pointer;
            letter-spacing: 0.04em;
            text-align: center;
            text-decoration: none;
            transition: background 0.2s, color 0.2s;
            user-select: none;
          }
          .learn-more-tab:hover {
            background:rgb(255, 252, 63);
            color: #18181a;
          }
          /* Overlay/Blank stage styles */
          .blank-stage {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background:rgb(8, 18, 13);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s;
          }
          .blank-stage.visible {
            opacity: 1;
            pointer-events: auto;
            transition: opacity 0.5s;
          }
          .blank-term {
            font-size: 8vw;
            font-weight: 700;
            color:rgb(234, 248, 80);
            letter-spacing: 0.04em;
            text-align: center;
            opacity: 1;
            will-change: opacity, transform;
            transition: none;
            z-index: 1001;
            margin-bottom: 32px;
            text-shadow: 0 2px 32pxrgba(247, 244, 66, 0.8), 0 1px 0 #0008;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          }
          .blank-image {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%) scale(0.1);
            opacity: 0;
            width: 120vw;
            height: 120vh;
            object-fit: cover;
            z-index: 1002;
            border-radius: 32px;
            box-shadow: 0 8px 32px #000a;
            pointer-events: none;
            will-change: opacity, transform;
            transition: none;
          }
          .blank-term.hidden {
            opacity: 0;
          }
          @media (max-width: 900px) {
            .stage-content-container {
              align-items: stretch;
            }
            .stage-section {
              flex-direction: column;
              width: 100vw;
              height: 100vh;
              align-items: stretch;
            }
            .stage-left, .stage-right {
              min-height: 40vh;
              justify-content: center;
              padding: 32px 0;
            }
            .stage-image-container {
              width: 80vw;
              height: 40vw;
              min-width: 220px;
              min-height: 220px;
              max-width: 420px;
              max-height: 420px;
            }
            .blank-term {
              font-size: 12vw;
            }
          }
        </style>
      </head>
      <body>
        <div id="phase1-wrapper" style="position:relative;will-change:transform;">
          <div class="stage-header">
            <span class="stage-word active" id="word-plan">plan<div class="stage-underline" id="underline-plan"></div></span>
            <span class="stage-word" id="word-design">design<div class="stage-underline" id="underline-design"></div></span>
            <span class="stage-word" id="word-build">build<div class="stage-underline" id="underline-build"></div></span>
          </div>
          <div class="stage-content-container" id="main-content">
            <section class="stage-section active" id="section-plan">
              <div class="stage-left">
                <div class="stage-desc" id="desc-plan">
                  <span class="desc-title">Plan your project with clarity and vision.</span>
                  <span class="desc-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</span>
                </div>
              </div>
              <div class="stage-right">
                <div class="stage-image-container">
                  <img src="/images/plan.png" class="stage-image" id="img-plan">
                  <div class="stage-icon" id="icon-plan">
                    <img src="/images/plan-icon.png" alt="Plan Icon">
                  </div>
                </div>
              </div>
            </section>
            <section class="stage-section" id="section-design">
              <div class="stage-left">
                <div class="stage-desc" id="desc-design">
                  <span class="desc-title">Design with creativity and precision.</span>
                  <span class="desc-subtext">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam.</span>
                </div>
              </div>
              <div class="stage-right">
                <div class="stage-image-container">
                  <img src="/images/design.png" class="stage-image" id="img-design">
                  <div class="stage-icon" id="icon-design">
                    <img src="/images/design-icon.png" alt="Design Icon">
                  </div>
                </div>
              </div>
            </section>
            <section class="stage-section" id="section-build">
              <div class="stage-left">
                <div class="stage-desc" id="desc-build">
                  <span class="desc-title">Build with confidence and skill.</span>
                  <span class="desc-subtext">Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.</span>
                </div>
              </div>
              <div class="stage-right">
                <div class="stage-image-container">
                  <img src="/images/build.png" class="stage-image" id="img-build">
                  <div class="stage-icon" id="icon-build">
                    <img src="/images/build-icon.png" alt="Build Icon">
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="blank-stage" id="blank-stage" style="display:none;">
          <div class="blank-term" id="blank-term">plan</div>
          <img class="blank-image" id="blank-image" src="/images/plan.png" style="display:none;" />
        </div>
        <div id="phase2" style="position:fixed;top:100vh;left:0;width:100vw;height:100vh;background:#0e2d1b;z-index:10;display:flex;align-items:center;justify-content:center;flex-direction:column;">
          <div id="phase2-content" style="width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;">
            <div id="phase2-image-container" style="position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:1;pointer-events:none;overflow:hidden;">
              <img id="phase2-image" src="" style="display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100vw;height:100vh;object-fit:cover;border-radius:32px;box-shadow:0 8px 32px #000a;"/>
            </div>
            <div id="phase2-numbering" style="font-size:16px;color:rgba(200,247,100,0.8);margin-bottom:8px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;z-index:2;"></div>
            <div id="phase2-term" style="font-size:7vw;min-font-size:80px;font-style:italic;color:rgb(200,247,100);font-family:'Playfair Display',serif;text-align:center;margin-bottom:32px;z-index:2;line-height:1.1;letter-spacing:0.01em;max-width:90vw;word-break:break-word;"></div>
            <div id="phase2-learnmore" style="position:fixed;bottom:48px;left:50%;transform:translateX(-50%);background:rgba(200,247,100,0.12);color:rgb(200,247,100);font-size:1.1rem;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:600;border-radius:18px;padding:10px 32px;box-shadow:0 2px 12px #0002;z-index:2;letter-spacing:0.04em;text-align:center;user-select:none;">Learn more</div>
          </div>
        </div>
        <script>
          // --- Setup ---
          const keys = ['plan', 'design', 'build'];
          const imagesSrc = [
            "/images/plan.png",
            "/images/design.png",
            "/images/build.png"
          ];
          const headerWords = keys.map(key => document.getElementById('word-' + key));
          const underlines = keys.map(key => document.getElementById('underline-' + key));
          const sections = keys.map(key => document.getElementById('section-' + key));
          const icons = keys.map(key => document.getElementById('icon-' + key));
          const images = keys.map(key => document.getElementById('img-' + key));
          const descs = keys.map(key => document.getElementById('desc-' + key));
          const blankStage = document.getElementById('blank-stage');
          const blankTerm = document.getElementById('blank-term');
          const blankImage = document.getElementById('blank-image');
          const phase1Wrapper = document.getElementById('phase1-wrapper');
          const phase2 = document.getElementById('phase2');
          const phase2Content = document.getElementById('phase2-content');
          const phase2Numbering = document.getElementById('phase2-numbering');
          const phase2Term = document.getElementById('phase2-term');
          const phase2Image = document.getElementById('phase2-image');
          const phase2ImageContainer = document.getElementById('phase2-image-container');
          const phase2LearnMore = document.getElementById('phase2-learnmore');
          const phase2Terms = ["plan", "design", "build"];
          const phase2Images = [
            "/images/plan.png",
            "/images/design.png",
            "/images/build.png"
          ];
          let phase2TermIdx = 0;
          let phase2ImageProgress = 0; // 0 = tiny, 1 = fullscreen
          let phase2State = 0; // 0 = showing term, 1 = animating image, 2 = fade out, 3 = next term
          let phase2Progress = 0; // 0 = phase 1 fully visible, 1 = phase 2 fully visible

          // --- State ---
          let currentIdx = 0;
          let scrollProgress = 0;
          let isTransitioning = false;

          // --- Helper functions for normal stage ---
          function setSection(idx) {
            headerWords.forEach((el, i) => el.classList.toggle('active', i === idx));
            sections.forEach((el, i) => el.classList.toggle('active', i === idx));
            gsap.set(underlines, { scaleX: 0 });
            gsap.set(underlines[idx], { scaleX: idx === 0 ? scrollProgress : idx === keys.length - 1 ? scrollProgress : 1 });
            gsap.set(icons, { scale: 1 });
            gsap.set(icons[idx], { scale: 1 });
            gsap.set(images, { scale: 1, opacity: 1, borderTopLeftRadius: 32, borderBottomLeftRadius: 32, borderTopRightRadius: 32, borderBottomRightRadius: 32 });
            gsap.set(document.querySelectorAll('.stage-image-container'), { borderTopLeftRadius: 32, borderBottomLeftRadius: 32, borderTopRightRadius: 32, borderBottomRightRadius: 32 });
            gsap.set(descs, { opacity: 1, y: 0 });
          }

          function updateUnderlineAndIcon(progress) {
            // progress: 0 to 1 (can go in reverse)
            gsap.to(underlines[currentIdx], { scaleX: progress, duration: 0.1, overwrite: true });
            gsap.to(icons[currentIdx], { scale: 1 + 0.15 * progress, duration: 0.1, overwrite: true });
            gsap.to(images[currentIdx], {
              scale: 1 - 0.08 * progress,
              duration: 0.1,
              overwrite: true,
              borderTopLeftRadius: 32,
              borderBottomLeftRadius: 32,
              borderTopRightRadius: 32,
              borderBottomRightRadius: 32
            });
            gsap.to(document.querySelectorAll('.stage-image-container'), {
              borderTopLeftRadius: 32,
              borderBottomLeftRadius: 32,
              borderTopRightRadius: 32,
              borderBottomRightRadius: 32,
              duration: 0.1,
              overwrite: true
            });
            gsap.to(descs[currentIdx], { opacity: 1 - 0.9 * progress, y: -20 * progress, duration: 0.1, overwrite: true });
          }

          // --- Phase 2 Logic ---
          function showPhase2Term(idx, reverse = false) {
            phase2Numbering.textContent = (idx + 1) + '-3';
            phase2Term.textContent = phase2Terms[idx];
            // Always create a new image element for this term and layer it on top
            const newImg = document.createElement('img');
            newImg.src = phase2Images[idx];
            newImg.style.position = 'absolute';
            newImg.style.top = '50%';
            newImg.style.left = '50%';
            newImg.style.transform = 'translate(-50%,-50%)';
            newImg.style.width = '100vw';
            newImg.style.height = '100vh';
            newImg.style.objectFit = 'cover';
            newImg.style.borderRadius = '32px';
            newImg.style.boxShadow = '0 8px 32px #000a';
            newImg.style.zIndex = 1;
            newImg.style.pointerEvents = 'none';
            newImg.style.display = 'block';
            newImg.className = 'phase2-img-anim';
            // If reverse, ensure previous image is present below
            if (reverse && idx > 0) {
              const imgs = phase2ImageContainer.querySelectorAll('.phase2-img-anim');
              if (imgs.length === 0 || imgs[imgs.length-1].src !== phase2Images[idx-1]) {
                const prevImg = document.createElement('img');
                prevImg.src = phase2Images[idx-1];
                prevImg.style.position = 'absolute';
                prevImg.style.top = '50%';
                prevImg.style.left = '50%';
                prevImg.style.transform = 'translate(-50%,-50%)';
                prevImg.style.width = '100vw';
                prevImg.style.height = '100vh';
                prevImg.style.objectFit = 'cover';
                prevImg.style.borderRadius = '32px';
                prevImg.style.boxShadow = '0 8px 32px #000a';
                prevImg.style.zIndex = 1;
                prevImg.style.pointerEvents = 'none';
                prevImg.style.display = 'block';
                prevImg.className = 'phase2-img-anim';
                phase2ImageContainer.appendChild(prevImg);
              }
            }
            phase2ImageContainer.appendChild(newImg);
            gsap.set(newImg, { scale: reverse ? 1 : 0.05, opacity: 1 });
            gsap.set([phase2Numbering, phase2Term], { opacity: 1 });
          }

          function animatePhase2Image(progress, reverse = false) {
            // Animate only the topmost image (newest)
            const imgs = phase2ImageContainer.querySelectorAll('.phase2-img-anim');
            if (imgs.length === 0) return;
            const topImg = imgs[imgs.length - 1];
            // If reverse and previous image exists, keep it at scale 1
            if (reverse && imgs.length > 1) {
              gsap.set(imgs[imgs.length-2], { scale: 1, opacity: 1 });
            }
            // Only the top image animates scale, all others stay at scale 1
            gsap.to(topImg, {
              scale: progress === 0 ? 0.001 : progress,
              opacity: 1,
              duration: 0.18,
              overwrite: true
            });
            // All previous images stay at scale 1 and opacity 1
            for (let i = 0; i < imgs.length - 1; i++) {
              gsap.set(imgs[i], { scale: 1, opacity: 1 });
            }
          }

          function fadeOutPhase2TermAndImage(cb, reverse = false) {
            gsap.to([phase2Numbering, phase2Term], {
              y: -60,
              opacity: 0,
              duration: 0.35,
              ease: 'power2.in',
              onComplete: () => {
                if (reverse) {
                  // Remove the top image (current shrunk one)
                  const imgs = phase2ImageContainer.querySelectorAll('.phase2-img-anim');
                  if (imgs.length > 1) phase2ImageContainer.removeChild(imgs[imgs.length-1]);
                  phase2TermIdx--;
                  // If we just finished shrinking the first image, clear all images for blank background
                  if (phase2TermIdx < 0) {
                    while (phase2ImageContainer.firstChild) phase2ImageContainer.removeChild(phase2ImageContainer.firstChild);
                    phase2TermIdx = 0;
                    phase2State = 0;
                    phase2ImageProgress = 0;
                    // Optionally, you can also hide the term text if desired
                    gsap.set([phase2Numbering, phase2Term], { opacity: 0 });
                  } else {
                    showPhase2Term(phase2TermIdx, reverse);
                    phase2ImageProgress = 1;
                    phase2State = 1;
                    animatePhase2Image(phase2ImageProgress, reverse);
                    // --- CLEANUP: Remove any extra stacked images above the current one ---
                    const imgsAfter = phase2ImageContainer.querySelectorAll('.phase2-img-anim');
                    while (imgsAfter.length > 2) phase2ImageContainer.removeChild(imgsAfter[0]);
                  }
                }
                cb();
              }
            });
          }

          function fadeInPhase2TermAndImage() {
            // Start below, then slide up and fade in
            gsap.set([phase2Numbering, phase2Term], { y: 60, opacity: 0 });
            gsap.to([phase2Numbering, phase2Term], {
              y: 0,
              opacity: 1,
              duration: 0.45,
              ease: 'power2.out'
            });
          }

          // Call fadeInPhase2TermAndImage after showPhase2Term
          const _origShowPhase2Term = showPhase2Term;
          showPhase2Term = function(idx, reverse = false) {
            _origShowPhase2Term(idx, reverse);
            fadeInPhase2TermAndImage();
          }

          // --- Phase 2 Animation ---
          function animatePhase2(progress) {
            gsap.to(phase1Wrapper, { y: -window.innerHeight * progress, duration: 0.4, ease: 'power2.inOut', overwrite: true });
            gsap.to(phase2, { top: (1 - progress) * 100 + 'vh', duration: 0.4, ease: 'power2.inOut', overwrite: true });
            // Only start term/image animation after phase2 is fully visible
            if (progress >= 1 && phase2State === 0) {
              showPhase2Term(phase2TermIdx);
              phase2State = 1;
              phase2ImageProgress = 0;
            }
          }

          // --- Main Scroll Handler ---
          function handleScroll(e) {
            let delta = e.deltaY || e.detail || e.wheelDelta;
            if (isTransitioning) { e.preventDefault(); return; }

            if (delta > 0) {
              let reverse = false;
              // --- PHASE 2 SCROLL LOGIC ---
              if (phase2Progress >= 1) {
                // In phase 2, animate image growth or move to next term
                if (phase2State === 1) {
                  phase2ImageProgress += 0.03;
                  if (phase2ImageProgress >= 1) {
                    phase2ImageProgress = 1;
                    animatePhase2Image(phase2ImageProgress, reverse);
                    phase2State = 2;
                    // Fade out and show next term if any
                    setTimeout(() => {
                      fadeOutPhase2TermAndImage(() => {
                        if (phase2TermIdx < 2) {
                          phase2TermIdx++;
                          showPhase2Term(phase2TermIdx, reverse);
                          phase2ImageProgress = 0;
                          phase2State = 1;
                        } else {
                          // End of phase 2
                          phase2State = 3;
                        }
                      }, false);
                    }, 400);
                  } else {
                    animatePhase2Image(phase2ImageProgress, reverse);
                  }
                }
                e.preventDefault();
                return;
              }
              // Scroll down
              if (currentIdx < keys.length) {
                scrollProgress += 0.12;
                if (scrollProgress >= 1) {
                  scrollProgress = 1;
                  updateUnderlineAndIcon(scrollProgress);
                  isTransitioning = true;
                  const prevIdx = currentIdx;
                  if (currentIdx < keys.length - 1) {
                    const nextIdx = currentIdx + 1;
                    const tl = gsap.timeline({
                      onComplete: () => {
                        currentIdx = nextIdx;
                        scrollProgress = 0;
                        setSection(currentIdx);
                        updateUnderlineAndIcon(scrollProgress);
                        isTransitioning = false;
                      }
                    });
                    tl.to([images[prevIdx], descs[prevIdx]], { opacity: 0, duration: 0.25, ease: 'power1.in' }, 0)
                      .to(images[prevIdx], {
                        scale: 0.92,
                        duration: 0.25,
                        ease: 'power1.in',
                        borderTopLeftRadius: 32,
                        borderBottomLeftRadius: 32,
                        borderTopRightRadius: 32,
                        borderBottomRightRadius: 32
                      }, 0)
                      .to(icons[prevIdx], { scale: 1.15, duration: 0.25, ease: 'power1.in' }, 0)
                      .add(() => {
                        sections.forEach((el, i) => el.classList.toggle('active', i === nextIdx));
                        headerWords.forEach((el, i) => el.classList.toggle('active', i === nextIdx));
                        gsap.set(underlines, { scaleX: 0 });
                        gsap.set(underlines[nextIdx], { scaleX: 0 });
                        gsap.set(icons, { scale: 1 });
                        gsap.set(icons[nextIdx], { scale: 1 });
                        gsap.set(images, { scale: 1, opacity: 0, borderTopLeftRadius: 32, borderBottomLeftRadius: 32, borderTopRightRadius: 32, borderBottomRightRadius: 32 });
                        gsap.set(document.querySelectorAll('.stage-image-container'), { borderTopLeftRadius: 32, borderBottomLeftRadius: 32, borderTopRightRadius: 32, borderBottomRightRadius: 32 });
                        gsap.set(descs, { opacity: 0, y: 20 });
                      })
                      .to(images[nextIdx], {
                        opacity: 1,
                        scale: 1,
                        duration: 0.35,
                        ease: 'power1.out',
                        borderTopLeftRadius: 32,
                        borderBottomLeftRadius: 32,
                        borderTopRightRadius: 32,
                        borderBottomRightRadius: 32
                      }, '+=0.05')
                      .to(document.querySelectorAll('.stage-image-container'), {
                        borderTopLeftRadius: 32,
                        borderBottomLeftRadius: 32,
                        borderTopRightRadius: 32,
                        borderBottomRightRadius: 32,
                        duration: 0.35,
                        ease: 'power1.out',
                        overwrite: true
                      }, '<')
                      .to(descs[nextIdx], { opacity: 1, y: 0, duration: 0.35, ease: 'power1.out' }, '<');
                  } else {
                    // At last section, start phase 2 scroll
                    isTransitioning = false;
                    phase2Progress += 0.12;
                    if (phase2Progress > 1) phase2Progress = 1;
                    animatePhase2(phase2Progress);
                  }
                } else {
                  updateUnderlineAndIcon(scrollProgress);
                }
              } else {
                // Already at last section, phase2 scroll
                phase2Progress += 0.12;
                if (phase2Progress > 1) phase2Progress = 1;
                animatePhase2(phase2Progress);
              }
            } else if (delta < 0) {
              let reverse = true;
              // --- PHASE 2 REVERSE SCROLL LOGIC ---
              if (phase2Progress >= 1 && (phase2State === 1 || phase2State === 2 || phase2State === 3)) {
                if (phase2State === 3 && phase2TermIdx === 2) {
                  // At end, go back to last image
                  phase2State = 1;
                  phase2ImageProgress = 1;
                  showPhase2Term(phase2TermIdx, reverse);
                  animatePhase2Image(phase2ImageProgress, reverse);
                  e.preventDefault();
                  return;
                }
                if (phase2State === 1 && phase2ImageProgress > 0) {
                  phase2ImageProgress -= 0.03;
                  if (phase2ImageProgress < 0) phase2ImageProgress = 0;
                  animatePhase2Image(phase2ImageProgress, reverse);
                  // If image is now fully shrunk, trigger previous term
                  if (phase2ImageProgress <= 0 && phase2TermIdx > 0) {
                    phase2State = 2;
                    fadeOutPhase2TermAndImage(() => {
                      // Remove the top image (current shrunk one)
                      const imgs = phase2ImageContainer.querySelectorAll('.phase2-img-anim');
                      if (imgs.length > 1) phase2ImageContainer.removeChild(imgs[imgs.length-1]);
                      phase2TermIdx--;
                      showPhase2Term(phase2TermIdx, reverse);
                      phase2ImageProgress = 1;
                      phase2State = 1;
                      animatePhase2Image(phase2ImageProgress, reverse);
                      // --- CLEANUP: Remove any extra stacked images above the current one ---
                      const imgsAfter = phase2ImageContainer.querySelectorAll('.phase2-img-anim');
                      while (imgsAfter.length > 2) phase2ImageContainer.removeChild(imgsAfter[0]);
                    }, true);
                  }
                  e.preventDefault();
                  return;
                }
                // Only allow transition back to phase 1 if first term and image is fully shrunk
                if (phase2State === 1 && phase2ImageProgress <= 0 && phase2TermIdx === 0) {
                  // allow phase2Progress to decrease (handled below)
                } else if (phase2State !== 1 || phase2ImageProgress > 0) {
                  e.preventDefault();
                  return;
                }
              }
              // Scroll up, fill progress backward
              if (phase2Progress > 0) {
                // Scroll back from phase 2
                phase2Progress -= 0.12;
                if (phase2Progress < 0) phase2Progress = 0;
                animatePhase2(phase2Progress);
              } else if (currentIdx > 0 || scrollProgress > 0) {
                scrollProgress -= 0.12;
                if (scrollProgress <= 0) {
                  scrollProgress = 0;
                  updateUnderlineAndIcon(scrollProgress);
                  isTransitioning = true;
                  const prevIdx = currentIdx;
                  if (currentIdx > 0) {
                    const nextIdx = currentIdx - 1;
                    const tl = gsap.timeline({
                      onComplete: () => {
                        currentIdx = nextIdx;
                        scrollProgress = 1;
                        setSection(currentIdx);
                        updateUnderlineAndIcon(scrollProgress);
                        isTransitioning = false;
                      }
                    });
                    tl.to([images[prevIdx], descs[prevIdx]], { opacity: 0, duration: 0.25, ease: 'power1.in' }, 0)
                      .to(images[prevIdx], {
                        scale: 0.92,
                        duration: 0.25,
                        ease: 'power1.in',
                        borderTopLeftRadius: 32,
                        borderBottomLeftRadius: 32,
                        borderTopRightRadius: 32,
                        borderBottomRightRadius: 32
                      }, 0)
                      .to(icons[prevIdx], { scale: 1.15, duration: 0.25, ease: 'power1.in' }, 0)
                      .add(() => {
                        sections.forEach((el, i) => el.classList.toggle('active', i === nextIdx));
                        headerWords.forEach((el, i) => el.classList.toggle('active', i === nextIdx));
                        gsap.set(underlines, { scaleX: 0 });
                        gsap.set(underlines[nextIdx], { scaleX: 1 });
                        gsap.set(icons, { scale: 1 });
                        gsap.set(icons[nextIdx], { scale: 1 });
                        gsap.set(images, { scale: 1, opacity: 0, borderTopLeftRadius: 32, borderBottomLeftRadius: 32, borderTopRightRadius: 32, borderBottomRightRadius: 32 });
                        gsap.set(document.querySelectorAll('.stage-image-container'), { borderTopLeftRadius: 32, borderBottomLeftRadius: 32, borderTopRightRadius: 32, borderBottomRightRadius: 32 });
                        gsap.set(descs, { opacity: 0, y: 20 });
                      })
                      .to(images[nextIdx], {
                        opacity: 1,
                        scale: 1,
                        duration: 0.35,
                        ease: 'power1.out',
                        borderTopLeftRadius: 32,
                        borderBottomLeftRadius: 32,
                        borderTopRightRadius: 32,
                        borderBottomRightRadius: 32
                      }, '+=0.05')
                      .to(document.querySelectorAll('.stage-image-container'), {
                        borderTopLeftRadius: 32,
                        borderBottomLeftRadius: 32,
                        borderTopRightRadius: 32,
                        borderBottomRightRadius: 32,
                        duration: 0.35,
                        ease: 'power1.out',
                        overwrite: true
                      }, '<')
                      .to(descs[nextIdx], { opacity: 1, y: 0, duration: 0.35, ease: 'power1.out' }, '<');
                  } else {
                    // At first section, allow scrollProgress to go forward if user scrolls down
                    setTimeout(() => { isTransitioning = false; }, 200);
                  }
                } else {
                  updateUnderlineAndIcon(scrollProgress);
                }
              }
            }
            e.preventDefault();
            return;
          }

          // --- Keyboard navigation (arrows) ---
          document.addEventListener('keydown', (e) => {
            if (isTransitioning) return;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
              if (currentIdx < keys.length - 1) {
                scrollProgress = 1;
                handleScroll({ deltaY: 1, preventDefault: () => {} });
              }
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
              if (currentIdx > 0) {
                scrollProgress = 0;
                handleScroll({ deltaY: -1, preventDefault: () => {} });
              }
            }
          });

          // --- Optionally, allow clicking header words to jump (only in normal stage) ---
          headerWords.forEach((el, i) => {
            el.addEventListener('click', () => {
              if (!isTransitioning && i !== currentIdx) {
                if (i > currentIdx) {
                  scrollProgress = 1;
                  handleScroll({ deltaY: 1, preventDefault: () => {} });
                } else if (i < currentIdx) {
                  scrollProgress = 0;
                  handleScroll({ deltaY: -1, preventDefault: () => {} });
                }
              }
            });
          });

          // --- Mouse wheel ---
          window.addEventListener('wheel', handleScroll, { passive: false });

          // --- Initial state ---
          setSection(0);
          updateUnderlineAndIcon(0);

          // --- Ensure phase2 content is hidden until phase2 is visible ---
          gsap.set(phase2Content, { opacity: 0 });
          let lastPhase2Progress = 0;
          setInterval(() => {
            if (phase2Progress >= 1 && lastPhase2Progress < 1) {
              gsap.to(phase2Content, { opacity: 1, duration: 0.4 });
            } else if (phase2Progress < 1 && lastPhase2Progress >= 1) {
              gsap.to(phase2Content, { opacity: 0, duration: 0.2 });
              // Remove all images from phase2ImageContainer when leaving phase 2
              while (phase2ImageContainer.firstChild) phase2ImageContainer.removeChild(phase2ImageContainer.firstChild);
              // Optionally, reset phase2State and phase2ImageProgress
              phase2State = 0;
              phase2ImageProgress = 0;
            }
            lastPhase2Progress = phase2Progress;
          }, 50);
        </script>
        <script>
        // --- PATCH: Fix scroll back bug ---
        // The original code only allows scrollProgress to decrease if currentIdx > 0,
        // but the transition to previous section only happens if scrollProgress <= 0.
        // If scrollProgress is already 0 and you try to scroll up, nothing happens.
        // We want to allow scrolling back to previous section if we're at progress 0 and not at the first section.

        // Solution: If scrollProgress is already 0 and delta < 0, and currentIdx > 0, trigger the transition to previous section.

        // Patch the handleScroll function:
        (function() {
          const origHandleScroll = handleScroll;
          window.removeEventListener('wheel', handleScroll, { passive: false });
          function patchedHandleScroll(e) {
            let delta = e.deltaY || e.detail || e.wheelDelta;
            if (isTransitioning) { e.preventDefault(); return; }

            if (delta > 0) {
              origHandleScroll(e);
            } else if (delta < 0) {
              // If at progress 0 and not at first section, trigger transition back
              if (scrollProgress <= 0 && currentIdx > 0) {
                scrollProgress = 0;
                updateUnderlineAndIcon(scrollProgress);
                isTransitioning = true;
                const prevIdx = currentIdx;
                const nextIdx = currentIdx - 1;
                const tl = gsap.timeline({
                  onComplete: () => {
                    currentIdx = nextIdx;
                    scrollProgress = 1; // Set progress to full for previous section
                    setSection(currentIdx);
                    updateUnderlineAndIcon(scrollProgress);
                    isTransitioning = false;
                  }
                });
                tl.to([images[prevIdx], descs[prevIdx]], { opacity: 0, duration: 0.25, ease: 'power1.in' }, 0)
                  .to(images[prevIdx], {
                    scale: 0.92,
                    duration: 0.25,
                    ease: 'power1.in',
                    borderTopLeftRadius: 32,
                    borderBottomLeftRadius: 32,
                    borderTopRightRadius: 32,
                    borderBottomRightRadius: 32
                  }, 0)
                  .to(icons[prevIdx], { scale: 1.15, duration: 0.25, ease: 'power1.in' }, 0)
                  .add(() => {
                    sections.forEach((el, i) => el.classList.toggle('active', i === nextIdx));
                    headerWords.forEach((el, i) => el.classList.toggle('active', i === nextIdx));
                    gsap.set(underlines, { scaleX: 0 });
                    gsap.set(underlines[nextIdx], { scaleX: 1 });
                    gsap.set(icons, { scale: 1 });
                    gsap.set(icons[nextIdx], { scale: 1 });
                    gsap.set(images, { scale: 1, opacity: 0, borderTopLeftRadius: 32, borderBottomLeftRadius: 32, borderTopRightRadius: 32, borderBottomRightRadius: 32 });
                    gsap.set(document.querySelectorAll('.stage-image-container'), { borderTopLeftRadius: 32, borderBottomLeftRadius: 32, borderTopRightRadius: 32, borderBottomRightRadius: 32 });
                    gsap.set(descs, { opacity: 0, y: 20 });
                  })
                  .to(images[nextIdx], {
                    opacity: 1,
                    scale: 1,
                    duration: 0.35,
                    ease: 'power1.out',
                    borderTopLeftRadius: 32,
                    borderBottomLeftRadius: 32,
                    borderTopRightRadius: 32,
                    borderBottomRightRadius: 32
                  }, '+=0.05')
                  .to(document.querySelectorAll('.stage-image-container'), {
                    borderTopLeftRadius: 32,
                    borderBottomLeftRadius: 32,
                    borderTopRightRadius: 32,
                    borderBottomRightRadius: 32,
                    duration: 0.35,
                    ease: 'power1.out',
                    overwrite: true
                  }, '<')
                  .to(descs[nextIdx], { opacity: 1, y: 0, duration: 0.35, ease: 'power1.out' }, '<');
                e.preventDefault();
                return;
              } else {
                origHandleScroll(e);
              }
            }
          }
          window.addEventListener('wheel', patchedHandleScroll, { passive: false });
        })();
        </script>
      </body>
      </html>
      `);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getScrollStagesDemo", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map