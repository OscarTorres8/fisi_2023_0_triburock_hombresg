import GetResponse from "../fetching/get/GetResponse";

export default interface Formattable {
    format: (response: GetResponse) => Record<string, string | number | boolean | undefined | null>
}
