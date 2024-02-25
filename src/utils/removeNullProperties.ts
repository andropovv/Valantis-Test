export default function removeNullProperties(obj: {}) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => value !== null)
    );
}
