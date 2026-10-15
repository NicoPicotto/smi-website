/* @ds-bundle: {"format":4,"namespace":"SMIServiciosIndustrialesDesignSystem_edc526","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"IconHex","sourcePath":"components/brand/IconHex.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"BenefitItem","sourcePath":"components/content/BenefitItem.jsx"},{"name":"CtaBanner","sourcePath":"components/content/CtaBanner.jsx"},{"name":"GalleryThumb","sourcePath":"components/content/GalleryThumb.jsx"},{"name":"PillarItem","sourcePath":"components/content/PillarItem.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"92ffe9499b90","components/brand/IconHex.jsx":"02f905b5ca23","components/brand/Logo.jsx":"cfeae71a6449","components/content/BenefitItem.jsx":"084958a46cd6","components/content/CtaBanner.jsx":"e6c6867f9197","components/content/GalleryThumb.jsx":"06c833561218","components/content/PillarItem.jsx":"08aad07797b0","components/content/ServiceCard.jsx":"b4a2ae7f3594","components/core/Button.jsx":"a8b10e0a2050","components/core/SectionHeading.jsx":"a29ef78cdb97","components/forms/Field.jsx":"67f362cecf6d","components/layout/Hero.jsx":"943dcf985cac","components/layout/SiteFooter.jsx":"32161ddc59cd","components/layout/SiteHeader.jsx":"5f41ab0de964","ui_kits/website/CareersScreen.jsx":"5342737f4282","ui_kits/website/ClientsScreen.jsx":"2cb769b4d9c7","ui_kits/website/ContactScreen.jsx":"e48949f5b07d","ui_kits/website/HomeScreen.jsx":"17d1e803f287","ui_kits/website/ServiceScreen.jsx":"12f91d552d36","ui_kits/website/site-data.jsx":"54e25a1e7bb2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SMIServiciosIndustrialesDesignSystem_edc526 = window.SMIServiciosIndustrialesDesignSystem_edc526 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Renders one SVG from the SMI icon package (assets/icons/*.svg). */
function Icon({
  name,
  base = 'assets/icons',
  size = 24,
  invert = false,
  alt = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/${name}.svg`,
    alt: alt,
    width: size,
    height: size,
    style: {
      display: 'block',
      width: size,
      height: size,
      flex: 'none',
      filter: invert ? 'brightness(0) invert(1)' : 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/IconHex.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  navy: {
    bg: 'var(--surface-dark)',
    invert: true
  },
  blue: {
    bg: 'var(--color-accent)',
    invert: true
  },
  light: {
    bg: 'var(--smi-blue-100)',
    invert: false
  }
};

/** Hexagonal icon badge — the site's signature service marker, echoing the logo silhouette. */
function IconHex({
  name,
  base = 'assets/icons',
  size = 40,
  tone = 'navy',
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.navy;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size * 1.1,
      flex: 'none',
      background: t.bg,
      clipPath: 'var(--hex-clip)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    base: base,
    size: Math.round(size * 0.5),
    invert: t.invert
  }));
}
Object.assign(__ds_scope, { IconHex });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/IconHex.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The supplied SMI hexagon lockup. Never redraw it — this component only scales the asset. */
function Logo({
  src = 'assets/logo/smi-logo.png',
  height = 56,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "SMI Servicios Industriales",
    style: {
      display: 'block',
      height,
      width: 'auto',
      filter: onDark ? 'brightness(0) invert(1)' : 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/BenefitItem.jsx
try { (() => {
/** Check-marked benefit line used in the recruiting section. */
function BenefitItem({
  children,
  base = 'assets/icons',
  style
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: 2,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calidad",
    base: base,
    size: 12,
    invert: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { BenefitItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BenefitItem.jsx", error: String((e && e.message) || e) }); }

// components/content/GalleryThumb.jsx
try { (() => {
/** Small photo tile for the clients / works gallery strip. */
function GalleryThumb({
  image,
  caption,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      margin: 0,
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: 'var(--radius-md)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transition: 'var(--transition-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: caption || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), caption && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-image)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 'var(--space-3)',
      bottom: 'var(--space-3)',
      right: 'var(--space-3)',
      font: 'var(--type-label)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { GalleryThumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GalleryThumb.jsx", error: String((e && e.message) || e) }); }

// components/content/PillarItem.jsx
try { (() => {
/** One of the four brand values on the navy strip under the hero. */
function PillarItem({
  icon,
  title,
  children,
  base = 'assets/icons',
  divider = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: '0 var(--space-6)',
      borderLeft: divider ? '1px solid var(--border-on-dark)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    base: base,
    size: 34,
    invert: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      font: 'var(--type-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-on-dark-muted)'
    }
  }, children)));
}
Object.assign(__ds_scope, { PillarItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PillarItem.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Photo + hexagon badge + uppercase label. The services grid unit. */
function ServiceCard({
  image,
  icon,
  title,
  note,
  base = 'assets/icons',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconHex, {
    name: icon,
    base: base,
    size: 34
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, title), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: 'var(--type-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, note))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--fs-xs)'
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--fs-sm)'
  },
  lg: {
    padding: '15px 32px',
    fontSize: 'var(--fs-body)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-accent)',
    color: 'var(--smi-white)',
    border: '1px solid var(--color-accent)'
  },
  navy: {
    background: 'var(--surface-dark)',
    color: 'var(--smi-white)',
    border: '1px solid var(--surface-dark)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-heading)',
    border: '1px solid var(--border-default)'
  },
  'outline-light': {
    background: 'transparent',
    color: 'var(--smi-white)',
    border: '1px solid var(--border-on-dark)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--smi-navy-700)',
    borderColor: 'var(--smi-navy-700)'
  },
  navy: {
    background: 'var(--smi-navy-900)',
    borderColor: 'var(--smi-navy-900)'
  },
  outline: {
    borderColor: 'var(--color-accent)',
    color: 'var(--color-accent)'
  },
  'outline-light': {
    background: 'rgba(255,255,255,.12)'
  }
};

/** Squared, uppercase call-to-action button. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-base)',
      ...SIZES[size],
      ...VARIANTS[variant],
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CtaBanner.jsx
try { (() => {
/** Full-width navy band with an icon, two lines of copy and one action. */
function CtaBanner({
  icon = 'presupuesto',
  title,
  children,
  action,
  onAction,
  base = 'assets/icons',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      background: 'var(--surface-dark)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-8) var(--space-10)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    base: base,
    size: 48,
    invert: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      letterSpacing: 'var(--ls-heading)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      font: 'var(--type-body)',
      color: 'var(--text-on-dark-muted)'
    }
  }, children)), action && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-light",
    onClick: onAction
  }, action));
}
Object.assign(__ds_scope, { CtaBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CtaBanner.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Uppercase section title with the brand's short accent rule underneath. */
function SectionHeading({
  title,
  intro,
  align = 'left',
  onDark = false,
  rule = true,
  style
}) {
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-h2)',
      letterSpacing: 'var(--ls-heading)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, title), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 3,
      background: 'var(--rule-accent)',
      margin: centered ? 'var(--space-4) auto 0' : 'var(--space-4) 0 0'
    }
  }), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      maxWidth: centered ? 720 : 480,
      marginLeft: centered ? 'auto' : 0,
      marginRight: centered ? 'auto' : 0,
      font: 'var(--type-body)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const control = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '11px 14px',
  font: 'var(--type-body)',
  color: 'var(--text-heading)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-sm)',
  outline: 'none',
  transition: 'var(--transition-base)'
};

/** Labelled form control: input, textarea or select. */
function Field({
  label,
  as = 'input',
  options = [],
  hint,
  required,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const css = {
    ...control,
    borderColor: focus ? 'var(--color-accent)' : 'var(--border-default)'
  };
  const handlers = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 'var(--space-2)',
      font: 'var(--type-label)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, " *")), as === 'textarea' && /*#__PURE__*/React.createElement("textarea", _extends({
    rows: 4,
    style: {
      ...css,
      resize: 'vertical'
    }
  }, handlers, rest)), as === 'select' && /*#__PURE__*/React.createElement("select", _extends({
    style: css
  }, handlers, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), as === 'input' && /*#__PURE__*/React.createElement("input", _extends({
    style: css
  }, handlers, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      font: 'var(--type-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
/** Full-bleed photo hero with a left-to-right navy protection gradient. */
function Hero({
  image,
  eyebrow,
  title,
  children,
  actions,
  height = 400,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      background: `#041C33 url(${image}) center/cover no-repeat`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--gutter)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--smi-blue-300)',
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-hero)',
      letterSpacing: 'var(--ls-display)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 3,
      background: 'var(--rule-accent)',
      margin: 'var(--space-6) 0'
    }
  }), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      fontSize: 'var(--fs-lead)',
      color: 'rgba(255,255,255,.86)',
      maxWidth: 420
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)'
    }
  }, actions))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
const colTitle = {
  font: 'var(--type-label)',
  fontSize: 'var(--fs-xs)',
  letterSpacing: 'var(--ls-label)',
  textTransform: 'uppercase',
  color: 'var(--text-on-dark)',
  marginBottom: 'var(--space-4)'
};
const line = {
  font: 'var(--type-body)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--text-on-dark-muted)'
};

/** Navy footer: lockup + tagline, link column, mail column, contact column. */
function SiteFooter({
  tagline = 'Soluciones integrales de limpieza y mantenimiento industrial.',
  links = [],
  emails = [],
  phone,
  address = [],
  logoSrc = 'assets/logo/smi-logo.png',
  base = 'assets/icons',
  onNavigate = () => {},
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      padding: 'var(--space-16) 0 var(--space-10)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1.3fr 1.3fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    onDark: true,
    height: 64
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      marginTop: 'var(--space-5)',
      maxWidth: 220
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Enlaces"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id || l.label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(l.id);
    },
    style: {
      ...line,
      textDecoration: 'none'
    }
  }, l.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Correos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, emails.map(e => /*#__PURE__*/React.createElement("div", {
    key: e,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "email",
    base: base,
    size: 16,
    invert: true
  }), /*#__PURE__*/React.createElement("span", {
    style: line
  }, e))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Contacto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, phone && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "contacto",
    base: base,
    size: 16,
    invert: true
  }), /*#__PURE__*/React.createElement("span", {
    style: line
  }, phone)), address.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ubicacion",
    base: base,
    size: 16,
    invert: true
  }), /*#__PURE__*/React.createElement("span", {
    style: line
  }, address.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      display: 'block'
    }
  }, a))))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
/** Sticky top bar: hexagon logo overhanging a light navigation strip. */
function SiteHeader({
  items = [],
  active,
  onNavigate = () => {},
  emails = [],
  logoSrc = 'assets/logo/smi-logo.png',
  base = 'assets/icons',
  style
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      zIndex: 20,
      background: 'var(--surface-page)',
      boxShadow: 'var(--shadow-header)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(items[0]?.id);
    },
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    height: 82,
    style: {
      marginTop: 14,
      filter: 'drop-shadow(0 4px 10px rgba(4,28,51,.25))'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      flex: 1
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    onMouseEnter: () => setOpen(it.children ? it.id : null),
    onMouseLeave: () => setOpen(null),
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate(it.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '18px 0',
      font: 'var(--type-label)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: active === it.id ? 'var(--color-accent)' : 'var(--text-heading)',
      boxShadow: active === it.id ? 'inset 0 -3px 0 var(--color-accent)' : 'none'
    }
  }, it.label, it.children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: 'var(--text-muted)'
    }
  }, "\u25BE")), it.children && open === it.id && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -12,
      minWidth: 240,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-card-hover)',
      padding: 'var(--space-2)'
    }
  }, it.children.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => {
      setOpen(null);
      onNavigate(it.id);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 12px',
      font: 'var(--type-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)'
    }
  }, c)))))), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setOpen('__mail'),
    onMouseLeave: () => setOpen(null),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '18px 0',
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "email",
    base: base,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, "Correos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: 'var(--text-muted)'
    }
  }, "\u25BE"), open === '__mail' && emails.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      right: 0,
      minWidth: 240,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-card-hover)',
      padding: 'var(--space-2)'
    }
  }, emails.map(e => /*#__PURE__*/React.createElement("div", {
    key: e,
    style: {
      padding: '8px 12px',
      font: 'var(--type-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)'
    }
  }, e))))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CareersScreen.jsx
try { (() => {
const {
  Hero,
  Button,
  SectionHeading,
  BenefitItem,
  Field
} = window.__SMI;
function CareersScreen({
  go
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    image: IMG + '/10-grupos-de-trabajo.jpg',
    height: 300,
    eyebrow: "Sumate al equipo",
    title: "Trabaj\xE1 para nosotros"
  }, "Buscamos personas comprometidas, responsables y con ganas de crecer."), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Beneficios"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-8) 0 0',
      padding: 0,
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, BENEFITS.map(b => /*#__PURE__*/React.createElement(BenefitItem, {
    key: b,
    base: ICONS
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-alt)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-10)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + '/postulacion.svg',
    width: "32",
    height: "32",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-heading)'
    }
  }, "Postulaci\xF3n enviada"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 var(--space-6)',
      font: 'var(--type-body)'
    }
  }, "Recibimos tus datos. Recursos Humanos se pondr\xE1 en contacto si tu perfil coincide con una b\xFAsqueda abierta."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => setSent(false)
  }, "Cargar otra postulaci\xF3n"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-heading)'
    }
  }, "Envi\xE1nos tu CV"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre y apellido",
    placeholder: "Nombre completo",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Tel\xE9fono",
    placeholder: "+54 11 \u2026",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    placeholder: "nombre@correo.com",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Puesto de inter\xE9s",
    as: "select",
    options: ['Operario de limpieza industrial', 'Ayudante de silero', 'Chofer / autoelevadorista', 'Encargado de cuadrilla']
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Experiencia",
    as: "textarea",
    placeholder: "Contanos brevemente tu experiencia",
    hint: "Adjunt\xE1 tu CV al correo recursoshumanos@smi.com.ar"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, "Enviar postulaci\xF3n")))))));
}
window.CareersScreen = CareersScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CareersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ClientsScreen.jsx
try { (() => {
const {
  Hero,
  SectionHeading,
  GalleryThumb,
  Button
} = window.__SMI;
const CLIENT_WORKS = [{
  image: IMG + '/11-planta-industrial.jpg',
  caption: 'Planta industrial'
}, {
  image: IMG + '/12-almacen-logistica.jpg',
  caption: 'Almacén y logística'
}, {
  image: IMG + '/06-carga-descarga-de-vagones.jpg',
  caption: 'Carga y descarga de vagones'
}, {
  image: IMG + '/07-ayudante-de-silero.jpg',
  caption: 'Ayudante de silero'
}, {
  image: IMG + '/04-pulido-de-pisos.jpg',
  caption: 'Pulido de pisos'
}, {
  image: IMG + '/02-espacios-confinados.jpg',
  caption: 'Espacios confinados'
}, {
  image: IMG + '/01-limpieza-en-altura.jpg',
  caption: 'Limpieza en altura'
}, {
  image: IMG + '/15-cuidado-entorno.jpg',
  caption: 'Cuidado del entorno'
}];
function ClientsScreen({
  go
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    image: IMG + '/12-almacen-logistica.jpg',
    height: 280,
    eyebrow: "Nuestros clientes",
    title: "Trabajos realizados"
  }, "Acompa\xF1amos a plantas industriales, centros log\xEDsticos y establecimientos agroindustriales."), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Fotogaler\xEDa"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-10)'
    }
  }, CLIENT_WORKS.map(w => /*#__PURE__*/React.createElement(GalleryThumb, {
    key: w.caption,
    image: w.image,
    caption: w.caption,
    onClick: () => setOpen(w)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    size: "sm",
    onClick: () => go('contacto')
  }, "Solicitar presupuesto"))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(4,28,51,.86)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: open.image,
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)'
    }
  }, open.caption))));
}
window.ClientsScreen = ClientsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ClientsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Hero,
  Button,
  SectionHeading,
  Field,
  Icon
} = window.__SMI;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    image: IMG + '/13-seguridad-calidad.jpg',
    height: 280,
    eyebrow: "Contacto",
    title: "Solicitar presupuesto"
  }, "Complet\xE1 el formulario y nuestro equipo se pondr\xE1 en contacto para brindarte una propuesta a medida."), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr .8fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-heading)'
    }
  }, "Solicitud enviada"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 var(--space-6)',
      font: 'var(--type-body)'
    }
  }, "Gracias por escribirnos. Vamos a responderte a la brevedad con una propuesta a medida."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => setSent(false)
  }, "Enviar otra solicitud")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Contanos qu\xE9 necesit\xE1s"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Empresa",
    placeholder: "Raz\xF3n social",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Contacto",
    placeholder: "Nombre y apellido",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    placeholder: "nombre@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Tel\xE9fono",
    placeholder: "+54 11 \u2026"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Servicio requerido",
    as: "select",
    options: SERVICES.map(s => s.title)
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Detalle del trabajo",
    as: "textarea",
    placeholder: "Alcance, planta, plazos",
    hint: "Cuanto m\xE1s detalle, m\xE1s precisa es la propuesta."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, "Enviar solicitud")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-dark)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)'
    }
  }, "Correos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      margin: 'var(--space-5) 0 var(--space-8)'
    }
  }, EMAILS.map(e => /*#__PURE__*/React.createElement("div", {
    key: e,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "email",
    base: ICONS,
    size: 16,
    invert: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-on-dark-muted)'
    }
  }, e)))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)'
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "contacto",
    base: ICONS,
    size: 16,
    invert: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-on-dark-muted)'
    }
  }, "+54 11 1234 5678")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ubicacion",
    base: ICONS,
    size: 16,
    invert: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Parque Industrial, Calle 1 \u2013 Nave 10", /*#__PURE__*/React.createElement("br", null), "(CP 0000) \u2013 Provincia, Argentina")))))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Hero,
  Button,
  PillarItem,
  SectionHeading,
  ServiceCard,
  CtaBanner,
  BenefitItem,
  GalleryThumb
} = window.__SMI;
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    image: IMG + '/hero-limpieza-mantenimiento-industrial.jpg',
    height: 420,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Limpieza y", /*#__PURE__*/React.createElement("br", null), "mantenimiento", /*#__PURE__*/React.createElement("br", null), "industrial"),
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('contacto')
    }, "Solicitar presupuesto")
  }, "Soluciones integrales con personal propio, capacitado y comprometido con la calidad, la seguridad y el cuidado del entorno."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement(PillarItem, {
    key: p.title,
    icon: p.icon,
    title: p.title,
    base: ICONS,
    divider: i > 0
  }, p.text)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.25fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Nosotros"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "SMI Servicios Industriales es una empresa familiar con m\xE1s de 20 a\xF1os de trayectoria brindando soluciones integrales de limpieza y mantenimiento industrial."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "Fundada sobre valores de trabajo, honestidad y compromiso, hemos crecido junto a nuestros clientes, construyendo relaciones de confianza basadas en la calidad del servicio y en el desarrollo constante de nuestro equipo."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "Hoy seguimos con la misma esencia que nos vio nacer: ser una empresa cercana, flexible y orientada a resultados, adapt\xE1ndonos a las necesidades de cada proyecto.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Conoc\xE9 m\xE1s sobre nuestra historia"))), /*#__PURE__*/React.createElement("img", {
    src: IMG + '/10-grupos-de-trabajo.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-media)',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Servicios para clientes",
    intro: "Contamos con personal propio, equipos y procedimientos adecuados para brindar soluciones eficientes y seguras en todo tipo de entornos industriales. Nos adaptamos a los requerimientos espec\xEDficos de cada cliente."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-6) var(--space-5)',
      marginTop: 'var(--space-12)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    base: ICONS,
    image: s.image,
    icon: s.icon,
    title: s.title,
    note: s.note,
    onClick: () => go('servicios', s)
  }))), /*#__PURE__*/React.createElement(CtaBanner, {
    base: ICONS,
    style: {
      marginTop: 'var(--space-16)'
    },
    title: "Presupuestos personalizados",
    action: "Solicitar presupuesto",
    onAction: () => go('contacto')
  }, "Complet\xE1 el formulario y nuestro equipo se pondr\xE1 en contacto para brindarte una propuesta a medida.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr .9fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Trabaj\xE1 para nosotros"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      font: 'var(--type-body)'
    }
  }, "Buscamos personas comprometidas, responsables y con ganas de crecer. Ofrecemos trabajo en blanco, capacitaci\xF3n continua y la posibilidad de formar parte de grandes proyectos."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('trabaja')
  }, "Envi\xE1nos tu CV"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)',
      marginBottom: 'var(--space-5)'
    }
  }, "Beneficios"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, BENEFITS.map(b => /*#__PURE__*/React.createElement(BenefitItem, {
    key: b,
    base: ICONS
  }, b)))), /*#__PURE__*/React.createElement("img", {
    src: IMG + '/09-encargados-cuadrillas.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-media)',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    alt: true,
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Nuestros clientes / Fotogaler\xEDa",
    rule: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-10)'
    }
  }, GALLERY.map((g, i) => /*#__PURE__*/React.createElement(GalleryThumb, {
    key: i,
    image: g,
    onClick: () => go('clientes')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    size: "sm",
    onClick: () => go('clientes')
  }, "Ver m\xE1s trabajos realizados"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceScreen.jsx
try { (() => {
const {
  Hero,
  Button,
  SectionHeading,
  IconHex,
  ServiceCard,
  CtaBanner
} = window.__SMI;
function ServiceScreen({
  go,
  service
}) {
  const s = service || SERVICES[2];
  const related = SERVICES.filter(x => x.title !== s.title).slice(0, 4);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    image: s.image,
    height: 320,
    eyebrow: "Servicios para clientes",
    title: s.title,
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('contacto')
    }, "Solicitar presupuesto")
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "El servicio"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      font: 'var(--type-body)'
    }
  }, "Trabajamos con personal propio, equipos adecuados y procedimientos de seguridad definidos para cada tarea. El alcance, la dotaci\xF3n y los plazos se acuerdan con el cliente antes de iniciar."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-sm)'
    }
  }, "Texto de referencia: el sitio original no incluye descripciones por servicio. Reemplazar con la copia real.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-alt)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(IconHex, {
    name: s.icon,
    base: ICONS,
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, s.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: 'var(--space-6) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, [['seguridad', 'Procedimientos y PPE por tarea'], ['recursos-humanos', 'Personal propio en relación de dependencia'], ['capacitacion', 'Capacitación continua del equipo']].map(([ic, tx]) => /*#__PURE__*/React.createElement("div", {
    key: tx,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + '/' + ic + '.svg',
    width: "20",
    height: "20",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--fs-sm)'
    }
  }, tx))))))), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Otros servicios"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-10)'
    }
  }, related.map(r => /*#__PURE__*/React.createElement(ServiceCard, {
    key: r.title,
    base: ICONS,
    image: r.image,
    icon: r.icon,
    title: r.title,
    onClick: () => go('servicios', r)
  }))), /*#__PURE__*/React.createElement(CtaBanner, {
    base: ICONS,
    style: {
      marginTop: 'var(--space-16)'
    },
    title: "Presupuestos personalizados",
    action: "Solicitar presupuesto",
    onAction: () => go('contacto')
  }, "Complet\xE1 el formulario y nuestro equipo se pondr\xE1 en contacto para brindarte una propuesta a medida.")));
}
window.ServiceScreen = ServiceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-data.jsx
try { (() => {
const IMG = '../../assets/images';
const NAV = [{
  id: 'nosotros',
  label: 'Nosotros'
}, {
  id: 'servicios',
  label: 'Servicios para clientes',
  children: ['Limpieza de celdas de acopio y túneles', 'Limpieza en espacios confinados y/o en altura', 'Hidrolavado', 'Pulido de pisos', 'Operadores de descargas de camiones', 'Operadores en carga y descarga de vagones', 'Ayudante de silero', 'Choferes / autoelevador / pala mecánica', 'Encargados de personal / cuadrillas', 'Grupos de trabajo para proyectos específicos']
}, {
  id: 'trabaja',
  label: 'Trabajá para nosotros'
}, {
  id: 'clientes',
  label: 'Nuestros clientes'
}, {
  id: 'contacto',
  label: 'Contacto'
}];
const EMAILS = ['recursoshumanos@smi.com.ar', 'administracion@smi.com.ar', 'gerencia@smi.com.ar'];
const PILLARS = [{
  icon: 'seguridad',
  title: 'Seguridad',
  text: 'Priorizamos el bienestar de las personas y el entorno.'
}, {
  icon: 'calidad',
  title: 'Calidad',
  text: 'Procesos eficientes y mejora continua.'
}, {
  icon: 'compromiso',
  title: 'Compromiso',
  text: 'Nos involucramos como socios estratégicos.'
}, {
  icon: 'confianza',
  title: 'Confianza',
  text: 'Relaciones a largo plazo basadas en resultados.'
}];
const SERVICES = [{
  icon: 'limpieza-mantenimiento',
  image: IMG + '/01-limpieza-en-altura.jpg',
  title: 'Limpieza de celdas de acopio y túneles'
}, {
  icon: 'espacios-confinados',
  image: IMG + '/02-espacios-confinados.jpg',
  title: 'Limpieza en espacios confinados y/o en altura'
}, {
  icon: 'hidrolavado',
  image: IMG + '/03-hidrolavado.jpg',
  title: 'Hidrolavado'
}, {
  icon: 'pulido-pisos',
  image: IMG + '/04-pulido-de-pisos.jpg',
  title: 'Pulido de pisos'
}, {
  icon: 'descarga-camiones',
  image: IMG + '/05-descargas-de-camiones.jpg',
  title: 'Operadores de descargas de camiones'
}, {
  icon: 'carga-descarga-vagones',
  image: IMG + '/06-carga-descarga-de-vagones.jpg',
  title: 'Operadores en carga y descarga de vagones'
}, {
  icon: 'ayudante-silero',
  image: IMG + '/07-ayudante-de-silero.jpg',
  title: 'Ayudante de silero'
}, {
  icon: 'maquinaria-operadores',
  image: IMG + '/08-choferes-autoelevador.jpg',
  title: 'Choferes de camión / tractor / autoelevador / pala mecánica'
}, {
  icon: 'cuadrillas-trabajo',
  image: IMG + '/09-encargados-cuadrillas.jpg',
  title: 'Encargados de personal / cuadrillas de trabajo'
}, {
  icon: 'cuadrillas-trabajo',
  image: IMG + '/10-grupos-de-trabajo.jpg',
  title: 'Grupos de trabajo para proyectos específicos',
  note: 'Ej: Mantenimiento y limpieza en paradas de planta'
}];
const BENEFITS = ['Trabajo en blanco desde el primer momento.', 'Obra Social según gremio sin costo adicional para el afiliado.', 'Planta permanente con posibilidad de elección de fecha de vacaciones (excepto períodos de campaña).', 'Posibilidad de capacitaciones y crecimiento laboral.', 'Posibilidad de acceso a grandes empresas a través de nuestro programa de "período de prueba para clientes".'];
const GALLERY = ['11-planta-industrial', '12-almacen-logistica', '11-planta-industrial', '07-ayudante-de-silero', '06-carga-descarga-de-vagones', '04-pulido-de-pisos'].map(n => IMG + '/' + n + '.jpg');
const ICONS = '../../assets/icons';
const LOGO = '../../assets/logo/smi-logo.png';
const Section = ({
  children,
  alt,
  tight,
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: alt ? 'var(--surface-alt)' : 'var(--surface-page)',
    padding: (tight ? 'var(--section-y-tight)' : 'var(--section-y)') + ' 0',
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  }
}, children));
Object.assign(window, {
  NAV,
  EMAILS,
  PILLARS,
  SERVICES,
  BENEFITS,
  GALLERY,
  ICONS,
  LOGO,
  IMG,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconHex = __ds_scope.IconHex;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.BenefitItem = __ds_scope.BenefitItem;

__ds_ns.CtaBanner = __ds_scope.CtaBanner;

__ds_ns.GalleryThumb = __ds_scope.GalleryThumb;

__ds_ns.PillarItem = __ds_scope.PillarItem;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
