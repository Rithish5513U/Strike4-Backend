const Transaction = require("../model/transactionSchema");

exports.storeTransactions = async (email, transactions) => {
    try {
        if (!transactions || transactions.length === 0) {
            throw new Error("No transactions provided");
        }

        for (let transaction of transactions) {
            const { date } = transaction;

            // Ensure date is valid before using split
            // if (typeof date !== "string" || !date.includes("-")) {
            //     console.error("Invalid date format:", date);
            //     continue; // Skip if invalid
            // }
        
            // Find user transactions document
            let userTransaction = await Transaction.findOne({ userEmail: email });
        
            // If not exists, create a new document
            if (!userTransaction) {
                userTransaction = new Transaction({ userEmail:email, transactions: [] });
            }
        
            // Push the new transaction inside transactions array
            userTransaction.transactions.push(transaction);
        
            // Save the updated document
            await userTransaction.save();
        }

        return { success: true, message: "Transactions stored successfully!" };
    } catch (error) {
        console.error("Error storing transactions:", error);
        throw new Error("Failed to store transactions.");
    }
};
