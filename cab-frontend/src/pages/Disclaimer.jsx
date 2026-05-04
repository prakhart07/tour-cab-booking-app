const Disclaimer = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>

      <p>
        Swara Trips provides travel services with best efforts but does not guarantee
        uninterrupted or error-free services.
      </p>

      <ul className="list-disc ml-6 mt-3">
        <li>We are not responsible for delays due to traffic/weather</li>
        <li>We are not liable for personal loss or damage</li>
        <li>Temple darshan depends on crowd and government rules</li>
      </ul>

      <p className="mt-4">
        By using our service, you agree to these terms.
      </p>
    </div>
  );
};

export default Disclaimer;