import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>Can't find what you are looking for? Change the dates!</p>
                <h1>Items for rent nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of item</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Features and add-ons</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                item_type="computer"
                title="Brand new iMac good for editing or coding"
                description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                star={4.73}
                price="$30 / night"
                total="$120 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                item_type="computer"
                title="Brand new iMac good for editing or coding"
                description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                star={4.73}
                price="$30 / night"
                total="$120 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                item_type="computer"
                title="Brand new iMac good for editing or coding"
                description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                star={4.73}
                price="$30 / night"
                total="$120 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                item_type="computer"
                title="Brand new iMac good for editing or coding"
                description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                star={4.73}
                price="$30 / night"
                total="$120 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                item_type="computer"
                title="Brand new iMac good for editing or coding"
                description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                star={4.73}
                price="$30 / night"
                total="$120 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                item_type="computer"
                title="Brand new iMac good for editing or coding"
                description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                star={4.73}
                price="$30 / night"
                total="$120 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                item_type="computer"
                title="Brand new iMac good for editing or coding"
                description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                star={4.73}
                price="$30 / night"
                total="$120 total"
            />
        </div>
    )
}

export default SearchPage