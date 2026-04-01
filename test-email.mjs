// Test script to submit 3 test enquiries
const testSubmissions = [
    { name: "Rahul Sharma", email: "rahul.sharma@test.com", phone: "+91 9876543210" },
    { name: "Priya Patel", email: "priya.patel@test.com", phone: "+91 8765432109" },
    { name: "Amit Kumar", email: "amit.kumar@test.com", phone: "+91 7654321098" }
];

async function submitEnquiry(data) {
    try {
        const response = await fetch('http://localhost:3000/api/send-enquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(`✓ ${data.name}: ${response.ok ? 'SUCCESS' : 'FAILED'} - ${JSON.stringify(result)}`);
        return response.ok;
    } catch (error) {
        console.log(`✗ ${data.name}: ERROR - ${error.message}`);
        return false;
    }
}

async function runTests() {
    console.log('Submitting 3 test enquiries to neonexminds@gmail.com...\n');

    for (const submission of testSubmissions) {
        await submitEnquiry(submission);
        await new Promise(r => setTimeout(r, 1000)); // Wait 1 second between submissions
    }

    console.log('\nDone! Check neonexminds@gmail.com for the test emails.');
}

runTests();
