import "../../styles/components/filters/_defaultfilter.scss";

function DefaultFilter() {
  return (
    <div className="container defaultfilter">
      <section className="flex-row flex-end gap10">
        <img src="/images/filter.png" alt="filter" />
        <h3>Filter</h3>
      </section>
    </div>
  );
}

export default DefaultFilter;
