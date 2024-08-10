export async function loadMarkdownFile(id: string) {
    try {
        const response = await fetch(`/contents/portfolio/${id}.md`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        if (!text.trim()) {
            throw new Error('ファイルの内容が空です');
        }
        return text;
    } catch (error) {
        console.error('マークダウンファイルの読み込みエラー:', error);
        throw error;
    }
}