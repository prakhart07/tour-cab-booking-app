const CancellationPolicy = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cancellation Policy</h1>

      <p>Customers can cancel bookings under the following conditions:</p>

      <ul className="list-disc ml-6 mt-3">
        <li>24+ hours before journey: No charges</li>
        <li>12–24 hours: 25% charge</li>
        <li>Less than 12 hours: 50% charge</li>
        <li>No show: No refund</li>
      </ul>

      <p className="mt-4">Cancellation must be informed via call or WhatsApp.</p>
    </div>
  );
};

export default CancellationPolicy;