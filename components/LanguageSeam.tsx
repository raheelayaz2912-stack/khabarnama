export function LanguageSeam({ label = "اردو / URDU EDITION" }: { label?: string }) {
  return (
    <div className="seam" role="separator" aria-label="Urdu edition begins below">
      <span className="seam-badge">{label}</span>
    </div>
  );
}
