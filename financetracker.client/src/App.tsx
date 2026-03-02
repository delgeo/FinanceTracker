import { useEffect, useState } from 'react';

// This interface matches your C# Transaction.cs model
interface Transaction {
    id: number;
    description: string;
    amount: number;
    date: string;
    category: string;
}

function App() {
    // We tell useState to expect an array of Transactions
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const fetchTransactions = async () => {
        try {
            const response = await fetch('http://localhost:5018/api/transactions');
            if (!response.ok) throw new Error('Network response was not ok');
            const data: Transaction[] = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Finance Tracker</h1>
            <table border={1} cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length === 0 ? (
                        <tr><td colSpan={3}>No transactions found.</td></tr>
                    ) : (
                        transactions.map((t) => (
                            <tr key={t.id}>
                                <td>{t.description}</td>
                                <td>${t.amount.toFixed(2)}</td>
                                <td>{t.category}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default App;