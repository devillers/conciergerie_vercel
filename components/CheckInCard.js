export default function CheckInCard({ check_in_data_item }) {
  return (
    <>
      <section className="font-poppin leading-10 ">
        <div className="mb-4">
          <h1 className="text-2xl mb-4">{check_in_data_item.title_one}</h1>

          <p className="text-sm text-justify">
            {check_in_data_item.description_one}
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg mb-3">{check_in_data_item.title_two}</h2>
          <p className="text-sm text-justify">
            {check_in_data_item.description_two}
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg mb-3">{check_in_data_item.title_three}</h2>
          <p className="text-sm text-justify">
            {check_in_data_item.description_three}
          </p>
        </div>
      </section>
    </>
  );
}
