document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById("donut-chart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                "EU Hosting Expenses",
                "US Hosting Expenses",
                "Other Hosting Expenses",
                "Client Reimbursements",
                "Sustainability Fund Contributions",
                "Market Research",
                "Hosting Revenue",
                "Charitable Donations"
            ],
            datasets: [{
                // Outer Ring (EXPENDITURES)
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)', // EU Hosting Expenses 
                    'rgba(255, 40, 0, 0.2)', // US Hosting Expenses 
                    'rgba(255, 80, 0, 0.2)', // Other Hosting Expenses 
                    'rgba(255, 120, 0, 0.2)', // Client Reimbursements 
                    'rgba(255, 160, 0, 0.2)', // Sustainability Fund 
                    'rgba(255, 200, 0, 0.2)', // Market Research 
                    'rgba(0, 200, 0, 0.2)',
                    'rgba(0, 200, 100, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)', // EU Hosting Expenses 
                    'rgba(255, 40, 0, 1)', // US Hosting Expenses
                    'rgba(255, 80, 0, 1)', // Other Hosting Expenses
                    'rgba(255, 120, 0, 1)', // Client Reimbursements
                    'rgba(255, 160, 0, 1)', // Sustainability Fund 
                    'rgba(255, 200, 0, 1)', // Market Research 
                    'rgba(0, 200, 0, 1)',
                    'rgba(0, 200, 100, 1)'
                ],
                borderWidth: 1,
                data: [436.20, 301.53, 56.4, 206.8, 2500, 300, null, null] 
            },
            {
                // Inner Ring (REVENUE)
                backgroundColor: [
                    'rgba(235, 100, 100, 0.2)',
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(255, 0, 100, 0.2)',
                    'rgba(235, 162, 54, 0.2)',
                    'rgba(256, 100, 0, 0.2)',
                    'rgba(256, 20, 0, 0.2)',
                    'rgba(0, 200, 0, 0.2)',
                    'rgba(0, 200, 100, 0.2)'
                ],
                borderColor: [
                    'rgba(235, 100, 100, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 100, 1)',
                    'rgba(235, 162, 54, 1)',
                    'rgba(256, 100, 0, 1)',
                    'rgba(256, 20, 0, 1)',
                    'rgba(0, 200, 0, 1)',
                    'rgba(0, 200, 100, 1)'
                ],
                borderWidth: 1,
                data: [null, null, null, null, null, null, 1034.89, 2866.31] 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 50, // Adjust for larger or smaller hole
            plugins:
            {
                legend: {
                    display: true,
                    labels: {
                        color: 'white'
                    }
                },
                tooltip: {
                    enabled: true,
                    bodyColor: 'white',
                    titleColor: 'white',
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';

                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2}).format(context.parsed);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
});
