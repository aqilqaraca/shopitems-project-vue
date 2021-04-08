<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link active-class="active" class="navbar-brand" tag="a" to="/">
                    Product List
                </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link active-class="active" class="nav-link" tag="a" to="/product-processing">
                    Product Processing
                </router-link>
            </li>
            <li class="nav-item">
                <router-link active-class="active" class="nav-link" tag="a" to="/product-output">
                    Product Output
                </router-link>
            </li>
        </ul>
    </div>
</nav>
</template>