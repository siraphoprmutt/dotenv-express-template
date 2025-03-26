const fetchEnvData = async () => {
    const res = await fetch('/api/env');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
};

const renderEnvData = (data) => {
    const container = document.getElementById('envData');
    container.innerHTML = `
      <pre class="bg-gray-100 p-4 rounded border text-xs overflow-x-auto">
  ${JSON.stringify(data, null, 2)}
      </pre>
    `;
};

const renderError = (error) => {
    console.error('API error:', error);
    const container = document.getElementById('envData');
    container.innerText = '❌ Failed to load data from API';
};

const loadEnvData = async () => {
    try {
        const data = await fetchEnvData();
        renderEnvData(data);
    } catch (err) {
        renderError(err);
    }
};

loadEnvData();
