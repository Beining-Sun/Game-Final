let floatingSvg = null;
let originalSvg = null;
let id_floating = null;

document.querySelectorAll('.inventory-item').forEach(item => {
  item.addEventListener('click', () => {
    if (floatingSvg) return; // 忽略多次点击

    // ✅ 如果该 item 已被使用过，不响应
    if (item.dataset.used === 'true') return;

    // ✅ 标记为已使用
    item.dataset.used = 'true';

    // 获取 inventory-item 中的原始 svg
    originalSvg = item.querySelector('svg');

    id_floating = item.id;

    // 将原地 SVG 改成黑色方块
    item.innerHTML = `
      <svg viewBox="0 0 100 100">
        <rect x="0" y="0" width="100" height="100" fill="white"/>
      </svg>
      <p class="item-label">${item.querySelector('.item-label')?.textContent || ''}</p>
    `;

    // 克隆一个新的 SVG 来跟随鼠标移动（颜色仍为黑）
    const clone = originalSvg.cloneNode(true);
    clone.classList.add('floating-svg');

    // 临时隐藏
    clone.style.visibility = 'hidden';
    document.body.appendChild(clone);

    // 设置初始位置为当前鼠标位置
    clone.style.left = `${event.pageX - 25}px`;
    clone.style.top = `${event.pageY - 25}px`;

    // 显示 SVG
    clone.style.visibility = 'visible';
    floatingSvg = clone;


    // 绑定鼠标移动事件
    document.addEventListener('mousemove', moveWithMouse);
  });
});

function moveWithMouse(e) {
  if (!floatingSvg) return;
  floatingSvg.style.left = `${e.pageX - 25}px`;
  floatingSvg.style.top = `${e.pageY - 25}px`;
}

// 点击 stovetop 区域后，删除浮动 svg
document.getElementById('Stovetop').addEventListener('click', () => {
  if (floatingSvg) {
    floatingSvg.remove();
    floatingSvg = null;
    originalSvg = null;
    document.removeEventListener('mousemove', moveWithMouse);

    // step-1 -> step-2
    if (
      getComputedStyle(document.getElementById("step-1")).display === "block" &&
      id_floating === "skillet"
    ) {
      document.getElementById("step-1").style.display = "none";
      document.getElementById("step-2").style.display = "block";
      document.getElementById("svg1").style.display = "none";
      document.getElementById("svg2").style.display = "block";
      return
    }

    // step-3 -> step-4
    if (
      getComputedStyle(document.getElementById("step-3")).display === "block" &&
      id_floating === "olive-oil"
    ) {
      document.getElementById("step-3").style.display = "none";
      document.getElementById("step-4").style.display = "block";
      document.getElementById("svg3").style.display = "none";
      document.getElementById("svg4").style.display = "block";
      return
    }


    // step-4 -> step-5
    if (
      getComputedStyle(document.getElementById("step-4")).display === "block" &&
      id_floating === "a-bowl-of-beaten-eggs"
    ) {
      document.getElementById("step-4").style.display = "none";
      document.getElementById("step-5").style.display = "block";
      document.getElementById("svg4").style.display = "none";
      document.getElementById("svg5").style.display = "block";
      return
    }

    // step-10 -> step-11
    if (
      getComputedStyle(document.getElementById("step-10")).display === "block" &&
      id_floating === "salt"
    ) {
      document.getElementById("step-10").style.display = "none";
      document.getElementById("step-11").style.display = "block";
      return
    }

    // step-12 -> step-12-2
    if (
      getComputedStyle(document.getElementById("step-12")).display === "block" &&
      id_floating === "chunky-cut-tomatoes"
    ) {
      document.getElementById("step-12").style.display = "none";
      document.getElementById("step-12-2").style.display = "block";
      document.getElementById("svg2").style.display = "none";
      document.getElementById("svg11").style.display = "block";
      return
    }

    // step-14 -> step-15
    if (
      getComputedStyle(document.getElementById("step-14")).display === "block" &&
      id_floating === "seasoned-fried-egg"
    ) {
      document.getElementById("step-14").style.display = "none";
      document.getElementById("step-15").style.display = "block";
      document.getElementById("svg13").style.display = "none";
      document.getElementById("svg14").style.display = "block";
      return
    }

    if (id_floating === "a-bowl-of-beaten-eggs"){
    document.getElementById(id_floating).innerHTML = `<svg width="74" height="42" viewBox="0 0 74 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72 12C72 17.5228 56.33 22 37 22C17.67 22 2 17.5228 2 12C2 6.47715 17.67 2 37 2C56.33 2 72 6.47715 72 12Z" fill="#F9F9F9"/>
        <ellipse cx="36.5" cy="17.5" rx="29.5" ry="9.5" fill="#FFD963"/>
        <path d="M74 11.5C74 15.5053 73.043 19.4714 71.1835 23.1718C69.3241 26.8723 66.5987 30.2346 63.1629 33.0668C59.7272 35.8989 55.6483 38.1456 51.1593 39.6783C46.6702 41.2111 41.8589 42 37 42C32.1411 42 25.3298 41.2111 22.8407 39.6783C18.3517 38.1456 14.2728 35.8989 10.837 33.0668C7.40128 30.2346 4.67588 26.8723 2.81646 23.1718C0.957033 19.4714 -4.24779e-07 15.5053 0 11.5L4.5 16.5L14.5 20.5L25.5 22L37 23.1718L49.5 22L63.1629 19.5L70 16.5L74 11.5Z" fill="#4787FF"/>
        <path d="M37 1C47.142 1 56.2831 2.33454 62.8545 4.46582C66.1457 5.53324 68.7363 6.78339 70.4834 8.12305C72.2451 9.47388 73 10.7928 73 12C73 13.2072 72.2451 14.5261 70.4834 15.877C68.7363 17.2166 66.1457 18.4668 62.8545 19.5342C56.2831 21.6655 47.142 23 37 23C26.858 23 17.7169 21.6655 11.1455 19.5342C7.8543 18.4668 5.26374 17.2166 3.5166 15.877C1.75493 14.5261 1 13.2072 1 12C1 10.7928 1.75493 9.47388 3.5166 8.12305C5.26374 6.78339 7.8543 5.53324 11.1455 4.46582C17.7169 2.33454 26.858 1 37 1Z" stroke="#4787FF" stroke-width="2"/>
        </svg>
        <p class="item-label">A bowl of beaten eggs</p>`
    document.getElementById(id_floating).dataset.used = 'false';
    }

    if (id_floating === "salt"){
    document.getElementById(id_floating).innerHTML = `<svg viewBox="-60 -50 276.988 276.988" xmlns="http://www.w3.org/2000/svg">
          <g transform="scale(0.6)">
            <path fill="#FFFFFF" d="M181.979,52.167h-86.97V37.209c0-16.408,13.301-29.709,29.709-29.709h27.551
              c16.408,0,29.709,13.301,29.709,29.709v14.958H181.979z"/>
            <polygon fill="#FFFFFF" points="100.181,239.488 120.598,111.667 156.391,111.667 176.807,239.488"/>
            <path fill="#80D0E1" d="M207.916,244.052L181.979,81.667h-86.97L69.072,244.052c-2.132,13.347,8.179,25.436,21.695,25.436
              h95.453C199.737,269.488,210.048,257.399,207.916,244.052z M100.181,239.488l20.416-127.821h35.793l20.417,127.821H100.181z"/>
            <path fill="#FFE49C" d="M182.577,81.667H94.411c-8.146,0-14.75-6.604-14.75-14.75s6.604-14.75,14.75-14.75h88.167
              c8.146,0,14.75,6.604,14.75,14.75S190.724,81.667,182.577,81.667z"/>
            <path fill="#414042" d="M215.323,242.869L190.536,87.69c8.348-3.209,14.291-11.308,14.291-20.773
              c0-9.86-6.449-18.237-15.349-21.149v-8.559C189.479,16.692,172.787,0,152.27,0h-27.552c-20.517,0-37.209,16.692-37.209,37.209
              v8.559c-8.9,2.912-15.349,11.289-15.349,21.149c0,9.465,5.943,17.563,14.291,20.773L61.666,242.869
              c-2.861,17.909,10.99,34.119,29.101,34.119h95.453C204.357,276.988,218.179,260.754,215.323,242.869z
              M102.509,37.209c0-12.247,9.963-22.209,22.209-22.209h27.552c12.246,0,22.209,9.963,22.209,22.209v7.458h-71.97V37.209z
              M94.411,59.667h88.167c3.998,0,7.25,3.252,7.25,7.25c0,3.997-3.252,7.25-7.25,7.25H94.411c-3.998,0-7.25-3.253-7.25-7.25
              C87.161,62.919,90.413,59.667,94.411,59.667z M186.221,261.988H90.768c-8.903,0-15.692-7.969-14.289-16.753l24.928-156.068h74.176
              l24.928,156.068C201.915,254.029,195.114,261.988,186.221,261.988z"/>
            <path fill="#414042" d="M163.797,110.484c-0.581-3.639-3.721-6.317-7.406-6.317h-35.793c-3.686,0-6.825,2.678-7.406,6.317
              L92.775,238.305c-0.727,4.553,2.795,8.683,7.406,8.683h76.626c4.611,0,8.133-4.129,7.406-8.683L163.797,110.484z
              M108.974,231.988l18.021-112.821h22.999l18.021,112.821H108.974z"/>
            <circle fill="#414042" cx="129.282" cy="29.833" r="5"/>
            <circle fill="#414042" cx="147.706" cy="29.833" r="5"/>
          </g>
        </svg>
        <p class="item-label">Salt</p>`
    document.getElementById(id_floating).dataset.used = 'false';
    }

    if (id_floating === "chunky-cut-tomatoes"){
    document.getElementById(id_floating).innerHTML = `<svg width="100" height="100" viewBox="-25 -35 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" id="chunky-cut-tomatoes">
        <path d="M17 26.5C17 22.6366 16.729 18.8198 16.2061 15.3172C15.6832 11.8146 14.9209 8.71089 13.9727 6.22342C13.0245 3.73596 11.9133 1.92494 10.717 0.917264C9.52068 -0.0904157 8.26816 -0.270388 7.04717 0.389955C5.82619 1.0503 4.66629 2.53499 3.64873 4.74C2.63117 6.94501 1.78056 9.81702 1.1565 13.1548C0.532438 16.4926 0.15002 20.2154 0.0360349 24.0625C-0.07795 27.9096 0.0792558 31.7878 0.496639 35.4255L8.5 26.5H17Z" fill="#FA2600"/>
        <path d="M7.49997 18C11.4145 18 15.2838 18.2735 18.8494 18.8022C22.415 19.3309 25.5946 20.1027 28.1756 21.0659C30.7566 22.0291 32.6795 23.1615 33.8158 24.3874C34.9522 25.6134 35.2756 26.9046 34.7647 28.1747C34.2538 29.4449 32.9201 30.6647 30.853 31.7526C28.7859 32.8405 26.0329 33.7715 22.7782 34.4832C19.5234 35.195 15.8418 35.6711 11.9796 35.8798C8.11739 36.0885 4.16355 36.0249 0.382446 35.6933L7.49997 27L7.49997 18Z" fill="#FA2600"/>
        <path d="M35.0022 27.5C35.0022 23.8886 34.2909 20.3127 32.9089 16.9762C31.5269 13.6398 29.5012 10.6082 26.9476 8.05456C24.394 5.50095 21.3624 3.47531 18.026 2.09331C14.6895 0.711306 11.1135 -1.90735e-06 7.5022 -1.90735e-06L7.5022 27.5L35.0022 27.5Z" fill="#FA2600"/>
        <path d="M20.7484 13.306C21.7138 13.8928 21.1179 15.3796 20.0145 15.1373L19.1758 14.953C18.542 14.8138 17.9455 15.3057 17.9615 15.9544L17.9838 16.8582C18.0074 17.8152 16.8024 18.2553 16.2037 17.5082L14.1013 14.8843C13.8821 14.6108 13.5357 14.472 13.1884 14.5185L9.85569 14.964C8.90684 15.0909 8.33921 13.9404 9.01722 13.2646L9.65755 12.6263C10.1171 12.1683 10.0255 11.4006 9.47099 11.0635L8.73718 10.6175C7.7718 10.0308 8.36769 8.54391 9.47111 8.78628L10.3098 8.97051C10.9436 9.10971 11.5401 8.61781 11.5241 7.96912L11.5018 7.06531C11.4782 6.10832 12.6832 5.66829 13.2818 6.41533L15.3843 9.03921C15.6035 9.31271 15.9499 9.45152 16.2972 9.40508L19.6299 8.95952C20.5788 8.83266 21.1464 9.98316 20.4684 10.659L19.828 11.2972C19.3685 11.7553 19.4601 12.523 20.0146 12.86L20.7484 13.306Z" fill="#11B75E"/>
        </svg>
        <p class="item-label">Chunky-cut tomatoes</p>`
    document.getElementById(id_floating).dataset.used = 'false';
    }

    if (id_floating === "olive-oil"){
    document.getElementById(id_floating).innerHTML = `<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
   viewBox="-25 0 512 512" xml:space="preserve">
        <g transform="scale(0.9)">
          <path style="fill:#F6E088;" d="M347.612,152.837h16.198c0-59.542-48.268-107.811-107.811-107.811S148.189,93.295,148.189,152.837
          h16.198v42.615h-16.198v308.947H363.81V195.451h-16.198V152.837z"/>
          <path style="fill:#63A2AE;" d="M255.999,45.026c11.717,0,22.993,1.876,33.555,5.333V7.602h-67.111v42.756
          C233.006,46.902,244.283,45.026,255.999,45.026z"/>
          <g>
            <path style="fill:#491E17;" d="M320.193,125.425l13.972-5.992c-13.44-31.346-44.123-51.601-78.166-51.601v15.204
            C283.955,83.036,309.152,99.675,320.193,125.425z"/>
            <path style="fill:#491E17;" d="M363.811,160.439h7.602v-7.602c0-49.146-30.881-91.208-74.256-107.821V0h-82.315v45.016
            c-43.375,16.613-74.256,58.675-74.256,107.821v7.602h7.602h8.596v27.411h-16.198V512h230.826V187.849h-16.198v-27.411H363.811z
             M230.046,40.361V15.204h51.907v25.157c-0.602-0.139-1.206-0.262-1.81-0.39c-0.345-0.073-0.687-0.152-1.033-0.222
            c-0.535-0.109-1.074-0.209-1.612-0.31c-0.484-0.091-0.966-0.184-1.452-0.27c-0.497-0.087-0.994-0.168-1.493-0.248
            c-0.531-0.086-1.064-0.171-1.598-0.25c-0.473-0.069-0.948-0.135-1.421-0.199c-0.565-0.076-1.129-0.148-1.696-0.217
            c-0.456-0.055-0.912-0.107-1.369-0.156c-0.592-0.065-1.184-0.122-1.778-0.176c-0.438-0.041-0.875-0.081-1.314-0.117
            c-0.627-0.052-1.258-0.093-1.889-0.134c-0.406-0.025-0.814-0.056-1.221-0.077c-0.7-0.039-1.404-0.064-2.107-0.089
            c-0.34-0.013-0.68-0.029-1.02-0.039c-1.044-0.028-2.091-0.045-3.141-0.045c-1.05,0-2.096,0.016-3.141,0.045
            c-0.34,0.009-0.679,0.025-1.02,0.039c-0.703,0.024-1.407,0.051-2.107,0.089c-0.407,0.021-0.815,0.052-1.221,0.077
            c-0.631,0.041-1.262,0.082-1.889,0.134c-0.439,0.035-0.876,0.076-1.314,0.117c-0.594,0.055-1.186,0.111-1.778,0.176
            c-0.456,0.049-0.912,0.102-1.369,0.156c-0.567,0.068-1.131,0.141-1.696,0.217c-0.474,0.064-0.949,0.13-1.421,0.199
            c-0.534,0.079-1.067,0.164-1.599,0.25c-0.497,0.081-0.994,0.161-1.492,0.248c-0.486,0.085-0.968,0.178-1.452,0.27
            c-0.537,0.101-1.076,0.2-1.613,0.31c-0.344,0.07-0.685,0.148-1.029,0.221C231.255,40.101,230.649,40.223,230.046,40.361z
             M155.79,454.191v-38.064h200.418v38.064H155.79z M155.79,400.923v-38.066h200.418v38.066H155.79z M155.79,347.654V309.59h200.418
            v38.064H155.79z M155.79,294.387v-38.066h200.418v38.066H155.79z M155.79,496.796v-27.401h200.418v27.401H155.79z M356.21,203.053
            v38.065H155.791v-38.065h8.596h7.602H340.01h7.602H356.21z M340.01,187.849H171.99v-27.411h40.426v-15.204H171.99h-15.913
            c3.13-41.536,31.695-76.08,70.119-88.075c0.535-0.166,1.071-0.333,1.609-0.491c0.53-0.155,1.063-0.306,1.597-0.453
            c0.828-0.228,1.659-0.448,2.492-0.655c0.453-0.113,0.91-0.218,1.366-0.322c0.764-0.178,1.531-0.349,2.299-0.507
            c0.349-0.073,0.696-0.148,1.046-0.218c1.029-0.202,2.06-0.386,3.096-0.555c0.328-0.054,0.658-0.105,0.988-0.156
            c1.086-0.167,2.174-0.321,3.266-0.452c0.185-0.021,0.371-0.04,0.555-0.062c1.028-0.117,2.056-0.218,3.086-0.304
            c0.231-0.018,0.46-0.041,0.691-0.059c1.136-0.087,2.275-0.153,3.416-0.202c0.244-0.01,0.49-0.018,0.736-0.025
            c1.186-0.042,2.374-0.07,3.564-0.07s2.378,0.028,3.564,0.07c0.245,0.008,0.491,0.016,0.736,0.025
            c1.141,0.049,2.28,0.115,3.416,0.202c0.231,0.018,0.46,0.04,0.691,0.059c1.031,0.086,2.06,0.188,3.085,0.304
            c0.185,0.021,0.371,0.04,0.556,0.062c1.092,0.131,2.179,0.285,3.266,0.452c0.329,0.051,0.659,0.103,0.988,0.156
            c1.035,0.169,2.067,0.354,3.095,0.555c0.351,0.069,0.698,0.145,1.047,0.218c0.767,0.158,1.534,0.328,2.297,0.506
            c0.457,0.106,0.915,0.212,1.37,0.324c0.832,0.206,1.662,0.426,2.489,0.654c0.534,0.148,1.067,0.298,1.597,0.453
            c0.537,0.157,1.073,0.324,1.609,0.491c38.424,11.995,66.989,46.539,70.119,88.075h-15.913H232.689v15.204H340.01V187.849z"/>
          </g>
        </g>
        </svg>
        <p class="item-label">Olive oil</p>`
    document.getElementById(id_floating).dataset.used = 'false'; 
    }

    if (id_floating === "seasoned-fried-egg"){
    document.getElementById(id_floating).innerHTML = `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63 127.991C53.7203 127.849 44.9198 125.732 37 122.042V101H63V127.991ZM90 122.496C82.6294 125.777 74.5249 127.706 66 127.968V101H90V122.496ZM116.227 101C110.245 109.428 102.275 116.344 93 121.066V101H116.227ZM34 120.546C25.1521 115.842 17.5387 109.123 11.7734 101H34V120.546ZM34 98H9.76855C4.07772 88.942 0.594392 78.3574 0.0703125 67H34V98ZM63 98H37V67H63V98ZM90 98H66V67H90V98ZM127.93 67C127.406 78.3574 123.922 88.942 118.231 98H93V67H127.93ZM34 64H0C0 53.5608 2.5006 43.7059 6.93359 35H34V64ZM63 64H37V35H63V64ZM90 64H66V35H90V64ZM121.066 35C125.499 43.7059 128 53.5608 128 64H93V35H121.066ZM34 32H8.56348C14.5653 21.625 23.3952 13.0911 34 7.45312V32ZM63 32H37V5.95703C44.9198 2.26671 53.7204 0.149956 63 0.0078125V32ZM66 0.03125C74.5248 0.292932 82.6295 2.22209 90 5.50293V32H66V0.03125ZM93 6.93262C104.05 12.559 113.247 21.3005 119.437 32H93V6.93262Z" fill="#FFEE00"/>
        <path d="M37 116.465C44.8129 120.493 53.6412 122.827 63 122.982V127.983C53.7203 127.841 44.9198 125.725 37 122.034V116.465ZM90 122.488C82.6294 125.769 74.5249 127.698 66 127.96V122.957C74.5923 122.671 82.7187 120.548 90 116.968V122.488ZM116.227 100.992C110.245 109.42 102.275 116.336 93 121.059V115.384C99.5271 111.693 105.281 106.795 109.959 100.992H116.227ZM18.041 100.992C22.4782 106.497 27.8844 111.187 34 114.806V120.538C25.1521 115.834 17.5387 109.115 11.7734 100.992H18.041ZM127.93 66.9922C127.406 78.3496 123.922 88.9342 118.231 97.9922H112.224C118.472 89.1456 122.348 78.5036 122.925 66.9922H127.93ZM5.0752 66.9922C5.65172 78.5036 9.52766 89.1456 15.7764 97.9922H9.76855C4.07772 88.9342 0.594392 78.3496 0.0703125 66.9922H5.0752ZM121.066 34.9922C125.499 43.6981 128 53.553 128 63.9922H123C123 53.4514 120.236 43.5564 115.393 34.9922H121.066ZM12.6074 34.9922C7.76438 43.5564 5 53.4514 5 63.9922H0C0 53.553 2.5006 43.6981 6.93359 34.9922H12.6074ZM93 6.9248C104.05 12.5512 113.247 21.2927 119.437 31.9922H113.576C108.396 23.9827 101.327 17.3085 93 12.5996V6.9248ZM34 13.1777C26.1066 17.8479 19.3958 24.3052 14.4238 31.9922H8.56348C14.5653 21.6171 23.3952 13.0832 34 7.44531V13.1777ZM63 5.00098C53.6414 5.15651 44.8128 7.49038 37 11.5186V5.94922C44.9198 2.2589 53.7204 0.142143 63 0V5.00098ZM66 0.0234375C74.5248 0.28512 82.6295 2.21427 90 5.49512V11.0156C82.7188 7.43538 74.5922 5.31257 66 5.02637V0.0234375Z" fill="#BD802A"/>
        </svg>

        <p class="item-label">Seasoned fried egg</p>`
    document.getElementById(id_floating).dataset.used = 'false';
    }

    return
  }


  // step-2 -> step-3
  if (
    getComputedStyle(document.getElementById("step-2")).display === "block"
  ) {
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "block";
    document.getElementById("svg2").style.display = "none";
    document.getElementById("svg3").style.display = "block";
    return
  }

  // step-5 -> step-6
  if (
    getComputedStyle(document.getElementById("step-5")).display === "block"
  ) {
    document.getElementById("step-5").style.display = "none";
    document.getElementById("step-6").style.display = "block";
    document.getElementById("svg5").style.display = "none";
    document.getElementById("svg6").style.display = "block";
    return
  }

  // step-6 -> step-7
  if (
    getComputedStyle(document.getElementById("step-6")).display === "block"
  ) {
    document.getElementById("step-6").style.display = "none";
    document.getElementById("step-7").style.display = "block";
    return
  }

  // step-7 -> step-7-2
  if (
    getComputedStyle(document.getElementById("step-7")).display === "block"
  ) {
    document.getElementById("step-7").style.display = "none";
    document.getElementById("step-7-2").style.display = "block";
    document.getElementById("svg6").style.display = "none";
    document.getElementById("svg7").style.display = "block";
    return
  }

  // step-7-2 -> step-8
  if (
    getComputedStyle(document.getElementById("step-7-2")).display === "block"
  ) {
    document.getElementById("step-7-2").style.display = "none";
    document.getElementById("step-8").style.display = "block";
    document.getElementById("svg7").style.display = "none";
    document.getElementById("svg8").style.display = "block";
    return
  }

  // step-8 -> step-9
  if (
    getComputedStyle(document.getElementById("step-8")).display === "block"
  ) {
    document.getElementById("step-8").style.display = "none";
    document.getElementById("step-9").style.display = "block";
    document.getElementById("svg8").style.display = "none";
    document.getElementById("svg9").style.display = "block";
    return
  }

  // step-9 -> step-10
  if (
    getComputedStyle(document.getElementById("step-9")).display === "block"
  ) {
    document.getElementById("step-9").style.display = "none";
    document.getElementById("step-10").style.display = "block";
    document.getElementById("svg9").style.display = "none";
    document.getElementById("svg10").style.display = "block";
    return
  }

  // step-11-> step-12
  if (
    getComputedStyle(document.getElementById("step-11")).display === "block"
  ) {
    document.getElementById("step-11").style.display = "none";
    document.getElementById("step-12").style.display = "block";
    document.getElementById("svg10").style.display = "none";
    document.getElementById("svg2").style.display = "block";
    document.getElementById("seasoned-fried-egg").style.display = "block";
    return
  }

  // step-12-2-> step-13
  if (
    getComputedStyle(document.getElementById("step-12-2")).display === "block"
  ) {
    document.getElementById("step-12-2").style.display = "none";
    document.getElementById("step-13").style.display = "block";
    document.getElementById("svg11").style.display = "none";
    document.getElementById("svg12").style.display = "block";
    document.getElementById("seasoned-fried-egg").style.display = "block";
    return
  }

  // step-13-> step-14
  if (
    getComputedStyle(document.getElementById("step-13")).display === "block"
  ) {
    document.getElementById("step-13").style.display = "none";
    document.getElementById("step-14").style.display = "block";
    document.getElementById("svg12").style.display = "none";
    document.getElementById("svg13").style.display = "block";
    return
  }

  // step-15-> step-16
  if (
    getComputedStyle(document.getElementById("step-15")).display === "block"
  ) {
    document.getElementById("step-15").style.display = "none";
    document.getElementById("step-16").style.display = "block";
    document.getElementById("svg14").style.display = "none";
    document.getElementById("svg15").style.display = "block";
    return
  }

  // step-16-> step-17
  if (
    getComputedStyle(document.getElementById("step-16")).display === "block"
  ) {
    document.getElementById("step-16").style.display = "none";
    document.getElementById("step-17").style.display = "block";
    document.getElementById("svg15").style.display = "none";
    document.getElementById("svg16").style.display = "block";
    return
  }

  // step-17-> step-18
  if (
    getComputedStyle(document.getElementById("step-17")).display === "block"
  ) {
    document.getElementById("step-17").style.display = "none";
    document.getElementById("step-18").style.display = "block";
    document.getElementById("svg16").style.display = "none";
    document.getElementById("svg17").style.display = "block";
    return
  }



});




