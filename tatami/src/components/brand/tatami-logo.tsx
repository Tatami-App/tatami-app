export function TatamiLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`bg-primary text-primary-foreground px-6 py-2 rounded-md inline-block ${className}`}>
            <h1 className="text-2xl font-bold tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                TATAMI
            </h1>
        </div>
    )
}
