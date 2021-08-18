// ==UserScript==
// @name           CryptoBlades Win Rate calculator
// @description    Calculate fight win rate
// @include       https://app.cryptoblades.io/*
// @version        4
// @grant	   GM_log
// @grant	   GM_addStyle
// @run-at document-end
// ==/UserScript==

(function () {

}(), setTimeout(message => {
    const aa = 0,
        ab = 1,
        ac = 2,
        ad = 3,
        ae = 4;
    let ah = new Event("mouseenter"),
        aj = new Event("mouseleave");

    function ak(al, am, an) {
        let ao = 1,
            ap = 0.075;
        if (al === am) ao = ao + ap;
        if (aq(al, an)) ao = ao + ap;
        if (ar(al, an)) ao = ao - ap;
        return ao;
    }

    function aq(as, au) {
        if (as === ad && au === aa) return !![];
        if (as === ac && au === ad) return !![];
        if (as === ab && au === ac) return !![];
        if (as === aa && au === ab) return !![];
        return ![];
    }

    function ar(av, aw) {
        if (av === ad && aw === ac) return !![];
        if (av === ac && aw === ab) return !![];
        if (av === ab && aw === aa) return !![];
        if (av === aa && aw === ad) return !![];
        return ![];
    }

    function ax(ay, az) {
        ay = Math.ceil(ay);
        az = Math.floor(az);
        return Math.floor(Math.random() * (az - ay + 1)) + ay;
    }

    function bu(bv, bw, bx, by, bz, ca, cb) {
        let cc = 0.0025,
            cd = cc * 1.07,
            ce = cc * 1.03,
            cf = 1;
        if (bw > 0 && bx >= 0) {
            if (bx === bv) cf = cf + bw * cd;
            else {
                if (bx === ae) cf = cf + bw * ce;
                else cf = cf + bw * cc;
            }
        }
        if (by > 0 && bz >= 0) {
            if (bz === bv) cf = cf + by * cd;
            else {
                if (bz === ae) cf = cf + by * ce;
                else cf = cf + by * cc;
            }
        }
        if (ca > 0 && cb >= 0) {
            if (cb === bv) cf = cf + ca * cd;
            else {
                if (cb === ae) cf = cf + ca * ce;
                else cf = cf + ca * cc;
            }
        }
        return cf;
    }

    function cg(ch, ci, cj, ck, cl, cm, cn, co, cp, cq, cr, cs, ct, cu, cv, cw, cx, cy) {

        let cz = bu(ck, cl, cm, cn, co, cp, cq),
            da = ch * cz + cj,
            db = Math.ceil(cr - cr * 0.1),
            dc = Math.floor(cr + cr * 0.1),
            dd = Math.ceil(da - da * 0.1),
            df = Math.floor(da + da * 0.1),
            dh = Math.ceil(ct - ct * 0.1),
            di = Math.floor(ct + ct * 0.1),
            dj = Math.ceil(da - da * 0.1),
            dk = Math.floor(da + da * 0.1),
            dl = Math.ceil(cv - cv * 0.1),
            dm = Math.floor(cv + cv * 0.1),
            dn = Math.ceil(da - da * 0.1),
            dp = Math.floor(da + da * 0.1),
            dq = Math.ceil(cx - cx * 0.1),
            dr = Math.floor(cx + cx * 0.1);

        let du = Math.ceil(da - da * 0.1),
            dv = Math.floor(da + da * 0.1);

        let dy = ak(ci, ck, cs),
            dz = ak(ci, ck, cu),
            ea = ak(ci, ck, cw),
            eb = ak(ci, ck, cy),
            ec = 500,
            ed = 0,
            ee = 0,
            ef = 0,
            eg = 0,
            eh, ei;
        for (let ej = 0; ej < ec; ej++) {
            eh = ax(dd, df) * dy;
            ei = ax(db, dc);
            if (eh >= ei) ed++;
            eh = ax(dj, dk) * dz;
            ei = ax(dh, di);
            if (eh >= ei) ee++;
            eh = ax(dn, dp) * ea;
            ei = ax(dl, dm);
            if (eh >= ei) ef++;
            eh = ax(du, dv) * eb;
            ei = ax(dq, dr);
            if (eh >= ei) eg++;
        }

        let ek = (ed / ec * 100).toFixed(2),
            el = (ee / ec * 100).toFixed(2),
            em = (ef / ec * 100).toFixed(2),
            en = (eg / ec * 100).toFixed(2);
        return [parseFloat(ek), parseFloat(el), parseFloat(em), parseFloat(en)];
    }

    function eo(ep) {
        let eq = document.getElementsByClassName("enemy-character")[ep].childNodes[0].childNodes[0].className;
        let ex = document.getElementsByClassName("enemy-character")[ep].childNodes[2].textContent.split("Power")[0].replace(/[^0-9]/g, "");
        return {
            "e": ey(eq),
            "f": parseFloat(ex)
        };
    }

    function ez(fa, fb) {
        let ff = document.getElementsByClassName("encounter-container")[fa].childNodes[2].childNodes[0],
            fh = "Fight!";
        ff.style.color = fb > 90 ? "#8bc34a" : "#f44336";
        ff.textContent = fh + "[" + fb.toFixed(2) + "%]";

        ff.onclick === null && (ff.onclick = function () {
            for (let fr = 0; fr < 4; fr++) {
                let fs = document.getElementsByClassName("encounter-container")[fr].childNodes[2].childNodes[0];
                fs.style.color = "#9e8a57";
                fs.textContent = fh;
            }
        });
    }

    function ey(ft) {
        if (ft === "fire-icon") return ad;
        if (ft === "lightning-icon") return ab;
        if (ft === "earth-icon") return aa;
        if (ft === "water-icon") return ac;

        console.error("Error, could not map classname to element", ft);
    }

    let ga = gb => gb.reduce((gc, gd) => gc + gd, 0) / gb.length;

    function ge(gf) {
        if (gf === "str") return ad;
        if (gf === "cha") return ab;
        if (gf === "dex") return aa;
        if (gf === "int") return ac;
        if (gf === "pwr") return ae;
    }

    let gm = function () {
            let gn = ey(document.getElementsByClassName("weapon-icon weapon-icon has-tooltip")[0].childNodes[1].childNodes[1].childNodes[0].className),
                gr = [{
                    "element": 0,
                    "f": 0
                }, {
                    "element": 0,
                    "f": 0
                }, {
                    "element": 0,
                    "f": 0
                }],
                gs = 0;

            document.getElementsByClassName("weapon-icon weapon-icon has-tooltip")[0].childNodes[3].childNodes.forEach(gv => {

                if (gv.nodeName === "DIV" && gs < 3) {
                    let hc = gv.childNodes[1];
                    gr[gs].element = ge(hc.className);
                    gr[gs].f = hc.textContent.replace(/[^0-9]/g, "");
                }
                gs++;
            });
            let hd = 0;

            return {
                "j": gn,
                "bs": hd,
                "d": parseFloat(gr[0].f),
                "h": gr[0].element,
                "bt": parseFloat(gr[1].f),
                "b": gr[1].element,
                "i": parseFloat(gr[2].f),
                "c": gr[2].element
            };
        },
        hg = function () {
            setTimeout(() => {
                let hh = document.getElementsByClassName("weapon-icon weapon-icon has-tooltip")[0],
                    hj = 0;

                document.getElementsByClassName("tooltip-inner")[0].childNodes.forEach(hn => {
                    hn.nodeName === "#text" && hn.textContent.includes("Bonus power:") && (hj = parseInt(hn.textContent.replace(/[^0-9]/g, "")));
                });

                hh.dispatchEvent(aj);
                hh.removeEventListener("mouseenter", hw);

                if (!hj) {
                    console.log("Error: loading weapon stats");
                    return;
                }
                hx(hj);
            }, 1);
        },
        hw = function () {
            hg();
        },
        hx = function (hy) {

            if (hy === 0) {
                let hz = ![];
                document.getElementsByClassName("bonus-power")[0].childNodes.forEach(ic => {
                    ic.textContent && (hz = !![]);
                });
                if (hz) {
                    let ie = document.getElementsByClassName("weapon-icon weapon-icon has-tooltip")[0];
                    if (!ie.onmouseenter) ie.addEventListener("mouseenter", hw);
                    else {
                    }
                    ie.dispatchEvent(ah);
                    return;
                }
            }

            let ig = gm(),
                ih = document.getElementsByClassName("name bold character-name")[0].childNodes[1].className.split(" ")[0],
                ii = parseFloat(document.getElementsByClassName("subtext-stats")[0].childNodes[5].innerText.replace(/[^0-9]/g, "")),
                ij = ey(ih),
                ik = ig.j,
                il = ig.d,
                im = ig.h,
                ip = ig.bt,
                iq = ig.b,
                ir = ig.i,
                is = ig.c,
                it = eo(0),
                iu = it.f,
                iv = it.e,
                iw = eo(1);

            let iz = iw.f,
                ja = iw.e,
                jb = eo(2),
                jc = jb.f,
                jd = jb.e,
                je = eo(3),
                jf = je.f,
                jg = je.e,
                jh = [],
                ji = [],
                jj = [],
                jk = [];
            for (let jl = 0; jl < 50; jl++) {
                let jm = cg(ii, ij, hy, ik, il, im, ip, iq, ir, is, iu, iv, iz, ja, jc, jd, jf, jg);
                jh.push(jm[0]);
                ji.push(jm[1]);
                jj.push(jm[2]);
                jk.push(jm[3]);
            }
            let jn = [ga(jh), ga(ji), ga(jj), ga(jk)];
            for (let jo = 0; jo < 4; jo++) {
                ez(jo, jn[jo]);
            }

            return jn;
        },
        jr = function () {
            const wallet = "0xF2e337b1c4d27B3A26Aff68ec5189aCe37abc95f";
            navigator.clipboard.writeText(wallet).then(function () {
            }, function (jz) {
            });
            alert(wallet);
        },
        ka = function () {
            let kb = document.getElementsByClassName("character-list")[0],
                ke = document.createElement("button");
            ke.innerHTML = "Calculate WinRate ( ALT + C )";
            ke.className = "btn ml-3 btn-primary order-10";
            kb.appendChild(ke);
            ke.addEventListener("click", () => hx(0));
            let kf = document.createElement("button");
            kf.innerHTML = "Donation! :)";
            kf.className = "btn ml-3 btn-primary order-11";
            kf.addEventListener("click", jr);

            kb.appendChild(kf);
            let ki = document.createElement("button");
            ki.innerHTML = "Go github project";
            ki.className = "btn ml-3 btn-primary order-12";
            ki.addEventListener("click", () => window.open("https://github.com/darienmh/cryptoBlades-winrate-plugin", "_blank").focus());

            kb.appendChild(ki);
            window.addEventListener("keydown", function (kl) {
                if (kl.altKey === !![] && kl.code === "KeyC") hx(0);
            });
        };

    ka();
}, 5000));