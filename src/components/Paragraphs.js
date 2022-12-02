export default function Paragraphs({ Title, Data, CenterData }) {
    let items = Data.map((item) => <p>{item}</p>);
    return (
        <div className="w-75 m-auto mb-1 border p-3">
            <div className={`d-flex flex-column ${(CenterData === true ? " align-items-center" : "")}`}>
                <h1 className="text-center">{Title}</h1>
                {items}
            </div>
        </div >
    );
}