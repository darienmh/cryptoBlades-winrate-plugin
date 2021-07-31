// ==UserScript==
// @name           CryptoBlades Win Rate calculator
// @description    Calculate fight win rate
// @include       https://app.cryptoblades.io/*
// @version        3
// @grant	   GM_log
// @grant	   GM_addStyle
// @run-at document-end
// ==/UserScript==

const a = [
    "b",
    "encounter-container",
    "528618tiyunE",
    "0xF2e337b1c4d27B3A26Aff68ec5189aCe37abc95f",
    "519783kGXlMh",
    "8677BizsEu",
    "reduce",
    "water-icon",
    "pwr",
    "165211gQTTUe",
    "#f44336",
    "nodeName",
    "912190cFnFkG",
    "random",
    "#8bc34a",
    "4639AlamaB",
    "Error, could not map classname to element",
    "31RSflxv",
    "mouseleave",
    "innerHTML",
    "color",
    "length",
    "c",
    "click",
    "fire-icon",
    "split",
    "Go github project",
    "d",
    "KeyC",
    "getElementsByClassName",
    "toFixed",
    "dex",
    "push",
    "872927ZyUiyv",
    "e",
    "onmouseenter",
    "style",
    "innerText",
    "clipboard",
    "mouseenter",
    "https://github.com/darienmh/cryptoBlades-winrate-plugin",
    "bonus-power",
    "element",
    "Power",
    "2xteaFr",
    "Calculate WinRate ( ALT + C )",
    "addEventListener",
    "floor",
    "#9e8a57",
    "lightning-icon",
    "focus",
    "187VKAWTX",
    "tooltip-inner",
    "code",
    "onclick",
    "textContent",
    "includes",
    "Bonus power:",
    "earth-icon",
    "className",
    "childNodes",
    "Fight! ",
    "appendChild",
    "createElement",
    "forEach",
    "button",
    "keydown",
    "ceil",
    "2kQiKLc",
    "3ujepYi",
    "#text",
    "open",
    "name bold character-name",
    "Error: loading weapon stats",
    "weapon-icon weapon-icon has-tooltip",
    "1gxDGAF",
    "dispatchEvent",
    "f",
    "replace",
    "character-list",
    "_blank",
    "h",
    "i",
    "enemy-character",
    "btn ml-3 btn-primary order-12",
    "altKey",
    "j"
];

function k(l, m) {
    return k = function (n, o) {
        n = n - 445;
        let p = a[n];
        return p;
    }, k(l, m);
}

(function (q, r) {
    function s(t, u) {
        return k(u - 537, t);
    }

    function v(w, x) {
        return k(x - -184, w);
    }

    while (!![]) {
        try {
            const y = parseInt(s(960, 994)) * parseInt(v(296, 271)) + parseInt(s(1031, 1052)) * parseInt(s(963, 989)) + parseInt(v(324, 347)) + parseInt(v(262, 300)) * -parseInt(v(345, 345)) + -parseInt(v(254, 265)) * -parseInt(v(344, 325)) + parseInt(v(281, 261)) * parseInt(v(270, 307)) + -parseInt(v(354, 324)) * parseInt(v(262, 289));
            if (y === r) break;
            else q.push(q.shift());
        } catch (z) {
            q.push(q.shift());
        }
    }
}(a, 890924), setTimeout(() => {
    const aa = 0,
        ab = 1,
        ac = 2,
        ad = 3,
        ae = 4;
    let af = [],
        ag = "",
        ah = new Event(ai(642, 603)),
        aj = new Event(ai(621, 661));

    function ak(al, am, an) {
        let ao = 1,
            ap = 0.075;
        if (al == am) ao = ao + ap;
        if (aq(al, an)) ao = ao + ap;
        if (ar(al, an)) ao = ao - ap;
        return ao;
    }

    function aq(as, au) {
        if (as == ad && au == aa) return !![];
        if (as == ac && au == ad) return !![];
        if (as == ab && au == ac) return !![];
        if (as == aa && au == ab) return !![];
        return ![];
    }

    function ar(av, aw) {
        if (av == ad && aw == ac) return !![];
        if (av == ac && aw == ab) return !![];
        if (av == ab && aw == aa) return !![];
        if (av == aa && aw == ad) return !![];
        return ![];
    }

    function ax(ay, az) {
        ay = Math[ba(848, 880)](ay), az = Math.floor(az);

        function ba(bb, bc) {
            return ai(bb - 178, bc);
        }

        function bd(be, bf) {
            return bg(be, bf - -966);
        }

        return Math[bd(51, 89)](Math[bd(27, 55)]() * (az - ay + 1)) + ay;
    }

    function bh() {
        let bi = ag[bj(329, 302)]("|"),
            bk = [];

        function bl(bm, bn) {
            return ai(bm - 109, bn);
        }

        function bj(bo, bp) {
            return ai(bo - -299, bp);
        }

        for (let bq = 0; bq < bi[bj(325, 300)] - 1; bq++) {
            let br = bi[bq][bl(737, 731)]("&");
            bk.push({
                "j": parseFloat(br[0]),
                "bs": parseFloat(br[1]),
                "d": parseFloat(br[2]),
                "h": parseFloat(br[3]),
                "bt": parseFloat(br[4]),
                "b": parseFloat(br[5]),
                "i": parseFloat(br[6]),
                "c": parseFloat(br[7]),
                "id": br[8]
            });
        }
        af = bk;
    }

    function bu(bv, bw, bx, by, bz, ca, cb) {
        let cc = 0.0025,
            cd = cc * 1.07,
            ce = cc * 1.03,
            cf = 1;
        if (bw > 0 && bx >= 0) {
            if (bx == bv) cf = cf + bw * cd;
            else {
                if (bx == ae) cf = cf + bw * ce;
                else cf = cf + bw * cc;
            }
        }
        if (by > 0 && bz >= 0) {
            if (bz == bv) cf = cf + by * cd;
            else {
                if (bz == ae) cf = cf + by * ce;
                else cf = cf + by * cc;
            }
        }
        if (ca > 0 && cb >= 0) {
            if (cb == bv) cf = cf + ca * cd;
            else {
                if (cb == ae) cf = cf + ca * ce;
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
            dd = Math[de(1301, 1300)](da - da * 0.1),
            df = Math[dg(1487, 1444)](da + da * 0.1),
            dh = Math[de(1301, 1298)](ct - ct * 0.1),
            di = Math.floor(ct + ct * 0.1),
            dj = Math[dg(1462, 1464)](da - da * 0.1),
            dk = Math.floor(da + da * 0.1),
            dl = Math[de(1301, 1330)](cv - cv * 0.1),
            dm = Math[de(1281, 1283)](cv + cv * 0.1),
            dn = Math.ceil(da - da * 0.1),
            dp = Math[dg(1432, 1444)](da + da * 0.1),
            dq = Math[dg(1471, 1464)](cx - cx * 0.1),
            dr = Math[de(1281, 1305)](cx + cx * 0.1);

        function dg(ds, dt) {
            return ai(dt - 794, ds);
        }

        let du = Math[de(1301, 1317)](da - da * 0.1),
            dv = Math[de(1281, 1257)](da + da * 0.1);

        function de(dw, dx) {
            return ai(dw - 631, dx);
        }

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
            eh = ax(dd, df) * dy, ei = ax(db, dc);
            if (eh >= ei) ed++;
            eh = ax(dj, dk) * dz, ei = ax(dh, di);
            if (eh >= ei) ee++;
            eh = ax(dn, dp) * ea, ei = ax(dl, dm);
            if (eh >= ei) ef++;
            eh = ax(du, dv) * eb, ei = ax(dq, dr);
            if (eh >= ei) eg++;
        }
        let ek = (ed / ec * 100)[dg(1463, 1427)](2),
            el = (ee / ec * 100)[de(1264, 1229)](2),
            em = (ef / ec * 100).toFixed(2),
            en = (eg / ec * 100)[dg(1447, 1427)](2);
        return [parseFloat(ek), parseFloat(el), parseFloat(em), parseFloat(en)];
    }

    function eo(ep) {
        let eq = document.getElementsByClassName(er(408, 399))[ep][es(-403, -440)][0].childNodes[0][es(-409, -441)];

        function es(et, eu) {
            return ai(eu - -1103, et);
        }

        function er(ev, ew) {
            return ai(ew - -287, ev);
        }

        let ex = document[er(321, 345)](es(-441, -417))[ep][er(352, 376)][2][es(-482, -445)][er(375, 341)](er(395, 359))[0][es(-427, -422)](/[^0-9]/g, "");
        return {
            "e": ey(eq),
            "f": parseFloat(ex)
        };
    }

    function ez(fa, fb) {
        function fc(fd, fe) {
            return ai(fe - -1145, fd);
        }

        let ff = document[fg(107, 128)](fc(-485, -454))[fa][fg(164, 159)][2].childNodes[0],
            fh = fg(181, 160),
            fi = fb > 90 ? fg(91, 113) : fg(86, 109);
        ff[fc(-538, -506)].color = fi, ff[fg(163, 154)] = fh + "[" + fb[fc(-487, -512)](2) + "%]";

        function fg(fj, fk) {
            return bg(fj, fk - -909);
        }

        ff[fg(176, 153)] === null && (ff[fg(155, 153)] = function () {
            function fl(fm, fn) {
                return fg(fm, fn - -169);
            }

            function fo(fp, fq) {
                return fc(fq, fp - 655);
            }

            for (let fr = 0; fr < 4; fr++) {
                let fs = document[fl(-12, -41)](fl(12, 18))[fr][fo(173, 193)][2][fl(-17, -10)][0];
                fs[fo(149, 114)][fl(-33, -50)] = fo(161, 199), fs.textContent = fh;
            }
        });
    }

    function ey(ft) {
        if (ft == fu(-499, -481)) return ad;
        if (ft == fu(-422, -456)) return ab;
        if (ft == fu(-475, -447)) return aa;

        function fu(fv, fw) {
            return bg(fv, fw - -1513);
        }

        if (ft == fu(-499, -498)) return ac;

        function fx(fy, fz) {
            return ai(fz - -863, fy);
        }

        alert(fu(-461, -489), ft);
    }

    let ga = gb => gb[bg(989, 1014)]((gc, gd) => gc + gd, 0) / gb[ai(624, 631)];

    function ge(gf) {
        if (gf == "str") return ad;

        function gg(gh, gi) {
            return ai(gh - -23, gi);
        }

        if (gf == "cha") return ab;

        function gj(gk, gl) {
            return ai(gk - -322, gl);
        }

        if (gf == gg(611, 654)) return aa;
        if (gf == "int") return ac;
        if (gf == gg(588, 558)) return ae;
    }

    let gm = function () {
            let gn = ey(document[gp(1247, 1212)](gp(1214, 1257))[0][gp(1284, 1243)][1][gq(1289, 1259)][1][gq(1247, 1259)][0].className),
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

            function gq(gt, gu) {
                return ai(gu - 596, gt);
            }

            document[gp(1236, 1212)](gq(1294, 1273))[0].childNodes[3][gq(1245, 1259)][gp(1213, 1247)](gv => {
                function gw(gx, gy) {
                    return gp(gx, gy - 236);
                }

                function gz(ha, hb) {
                    return gq(ha, hb - -1547);
                }

                if (gv[gw(1416, 1430)] == "DIV" && gs < 3) {
                    let hc = gv[gw(1465, 1479)][1];
                    gr[gs][gw(1449, 1461)] = ge(hc[gw(1445, 1478)]), gr[gs][gw(1467, 1496)] = hc[gw(1493, 1474)][gz(-258, -270)](/[^0-9]/g, "");
                }
                gs++;
            });
            let hd = 0;

            function gp(he, hf) {
                return ai(hf - 580, he);
            }

            return {
                "j": gn,
                "bs": hd,
                "d": parseFloat(gr[0][gp(1222, 1260)]),
                "h": gr[0][gp(1230, 1225)],
                "bt": parseFloat(gr[1][gp(1270, 1260)]),
                "b": gr[1].element,
                "i": parseFloat(gr[2][gq(1283, 1276)]),
                "c": gr[2][gq(1270, 1241)]
            };
        },
        hg = function () {
            setTimeout(() => {
                let hh = document[hi(171, 199)]("weapon-icon weapon-icon has-tooltip")[0],
                    hj = 0;

                function hk(hl, hm) {
                    return k(hm - 273, hl);
                }

                document[hi(171, 154)](hi(194, 188))[0].childNodes[hi(206, 195)](hn => {
                    function ho(hp, hq) {
                        return hk(hp, hq - -259);
                    }

                    function hr(hs, ht) {
                        return hi(hs - 4, ht);
                    }

                    hn[hr(157, 193)] == hr(216, 209) && hn.textContent[ho(467, 510)](hr(203, 168)) && (hj = parseInt(hn[hr(201, 166)][ho(571, 532)](/[^0-9]/g, "")));
                });

                function hi(hu, hv) {
                    return k(hu - -298, hv);
                }

                hh[hk(747, 789)](aj), hh.removeEventListener(hk(729, 752), hw);
                if (!hj) {
                    console.log(hi(215, 209));
                    return;
                }
                hx(hj);
            }, 1);
        },
        hw = function () {
            hg();
        },
        hx = function (hy) {
            if (hy == 0) {
                let hz = ![];
                document[ia(637, 595)](ib(-77, -70))[0][ib(-58, -26)][ia(615, 630)](ic => {
                    ic.textContent && (hz = !![]);
                });
                if (hz) {
                    let ie = document[ib(-89, -52)](ib(-44, -76))[0];
                    if (!ie[ia(576, 601)]) ie.addEventListener("mouseenter", hw);
                    else {
                    }
                    ie[ia(662, 642)](ah);
                    return;
                }
            }
            let ig = gm(),
                ih = document[ib(-89, -76)](ib(-46, -17))[0][ia(615, 626)][1][ia(647, 625)][ib(-93, -85)](" ")[0],
                ii = parseFloat(document.getElementsByClassName("subtext-stats")[0][ia(600, 626)][5][ib(-81, -75)][ia(666, 644)](/[^0-9]/g, "")),
                ij = ey(ih),
                ik = ig[ia(658, 652)],
                il = ig[ib(-91, -129)],
                im = ig[ia(671, 647)],
                ip = ig.bt,
                iq = ig[ib(-31, -51)],
                ir = ig[ia(635, 648)],
                is = ig[ib(-96, -76)],
                it = eo(0),
                iu = it[ib(-41, -44)],
                iv = it[ia(632, 600)],
                iw = eo(1);

            function ib(ix, iy) {
                return bg(iy, ix - -1126);
            }

            let iz = iw[ib(-41, -26)],
                ja = iw[ib(-84, -68)],
                jb = eo(2),
                jc = jb[ia(672, 643)],
                jd = jb.e,
                je = eo(3),
                jf = je.f,
                jg = je[ia(579, 600)],
                jh = [],
                ji = [],
                jj = [],
                jk = [];
            for (let jl = 0; jl < 50; jl++) {
                let jm = cg(ii, ij, hy, ik, il, im, ip, iq, ir, is, iu, iv, iz, ja, jc, jd, jf, jg);
                jh.push(jm[0]), ji[ia(580, 598)](jm[1]), jj[ib(-86, -129)](jm[2]), jk[ib(-86, -47)](jm[3]);
            }
            let jn = [ga(jh), ga(ji), ga(jj), ga(jk)];
            for (let jo = 0; jo < 4; jo++) {
                ez(jo, jn[jo]);
            }

            function ia(jp, jq) {
                return bg(jp, jq - -442);
            }

            return jn;
        },
        jr = function () {
            let js = jt(1432, 1459);

            function jt(ju, jv) {
                return bg(jv, ju - 334);
            }

            function jw(jx, jy) {
                return bg(jy, jx - -906);
            }

            navigator[jt(1380, 1367)].writeText(js).then(function () {
            }, function (jz) {
            }), alert(js);
        },
        ka = function () {
            let kb = document[kc(763, 721)](kd(689, 700))[0],
                ke = document.createElement(kc(772, 757));
            ke.innerHTML = kd(655, 665), ke.className = kd(694, 681), kb.appendChild(ke), ke[kc(767, 738)](kc(714, 715), () => hx(0));
            let kf = document[kc(728, 755)](kc(767, 757));
            kf[kc(669, 711)] = "Donation! :)", kf[kd(669, 633)] = kd(694, 655), kf[kc(761, 738)](kc(696, 715), jr);

            function kd(kg, kh) {
                return bg(kh, kg - -398);
            }

            kb[kc(788, 754)](kf);
            let ki = document[kc(719, 755)](kd(675, 666));
            ki[kc(732, 711)] = kc(760, 718), ki[kc(718, 751)] = kc(773, 776), ki[kc(744, 738)](kc(728, 715), () => window[kc(754, 763)](kc(707, 732), kc(811, 772))[kd(660, 662)]());

            function kc(kj, kk) {
                return bg(kj, kk - -316);
            }

            kb.appendChild(ki), window[kc(754, 738)](kc(725, 758), function (kl) {
                function km(kn, ko) {
                    return kc(kn, ko - -958);
                }

                function kp(kq, kr) {
                    return kc(kq, kr - 493);
                }

                if (kl[kp(1239, 1270)] == !![] && kl[km(-216, -213)] == km(-202, -238)) hx(0);
            });
        };

    function ai(ks, kt) {
        return k(ks - 163, kt);
    }

    function bg(ku, kv) {
        return k(kv - 568, ku);
    }

    ka();
}, 2000));