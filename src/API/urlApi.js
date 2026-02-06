async function urlShorterApi(longUrl) {
    try {
        const res = await fetch("https://urllink.site/api/url.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: longUrl }),
        });

        if (!res.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await res.json();

        console.log("API Response:", data);

        if (!data.short_url) {
            throw new Error("Invalid response from API");
        }

        return data.short_url;

    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}
export default urlShorterApi;