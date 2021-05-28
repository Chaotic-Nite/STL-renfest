import Navigation from "../components/navigation/Navigation.js";

function ErrorPage() {
    return (
        <>
        <Navigation />
        <div id='error'>
                <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
                <p className="notFoundDesc">
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
            </div>
        </>
    )
}

export default ErrorPage