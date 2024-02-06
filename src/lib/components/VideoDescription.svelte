<script>
    let showMore = false;
</script>

<div
    class:h-fit={ showMore }
    class:h-[105px]={ !showMore }
    class="bg-gray-200 mb-5 relative overflow-hidden text-sm rounded-lg p-3 hover:bg-gray-300"
>
    <div class="font-medium mb-2">
        <span>Video description</span>
    </div>

    <p class="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, expedita. Expedita dicta, reiciendis ullam suscipit eum obcaecati? Voluptatibus alias fuga aliquam aliquid amet maxime excepturi quod voluptates. Aspernatur, quo ipsa!
        Explicabo molestiae labore corrupti ut doloribus, possimus veniam consequatur porro dicta voluptate nobis repellendus voluptatibus nostrum impedit adipisci. Aspernatur, culpa a hic eligendi nam dignissimos molestias itaque magnam dicta ipsa?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae illum quo ab. Doloremque, temporibus. Vel molestias mollitia quos necessitatibus aperiam fugit itaque, dolore voluptate assumenda eius accusantium. Esse, labore?
        Alias laudantium officiis rem saepe asperiores vitae in sapiente temporibus. Incidunt ab quibusdam dolore perferendis explicabo accusantium accusamus placeat exercitationem, quam qui! Similique dolorem ipsam cumque nesciunt inventore animi repellat?
        Quae commodi vel quaerat, ipsa omnis ipsam nobis laboriosam sunt! Quod excepturi quisquam repellendus veritatis vitae natus fugit voluptate non fugiat, ea ducimus inventore beatae totam doloremque cum molestiae provident.
    </p>
    <button 
        on:click={() => {
            showMore = !showMore;
        }} 
        class="absolute bottom-1 right-1 font-medium p-1 capitalize bg-gray-200 group-hover:bg-gray-300">show { showMore ? 'more' : 'less'}</button>
</div>