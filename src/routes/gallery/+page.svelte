<script lang="ts">
    import Header from '$lib/ui/header/Header.svelte';

    // Placeholder gallery items - you can replace these with actual content
    const galleryItems = [
        {
            id: 1,
            title: "Project 1",
            description: "Description of your first project",
            image: "/favicon/favicon-96x96.png", // Using existing favicon as placeholder
            category: "Web Development"
        },
        {
            id: 2,
            title: "Project 2", 
            description: "Description of your second project",
            image: "/favicon/favicon-96x96.png",
            category: "Design"
        },
        {
            id: 3,
            title: "Project 3",
            description: "Description of your third project", 
            image: "/favicon/favicon-96x96.png",
            category: "Development"
        },
        {
            id: 4,
            title: "Project 4",
            description: "Description of your fourth project",
            image: "/favicon/favicon-96x96.png",
            category: "Research"
        }
    ];

    let selectedCategory = "All";
    const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
    
    $: filteredItems = selectedCategory === "All" 
        ? galleryItems 
        : galleryItems.filter(item => item.category === selectedCategory);
</script>

<Header/>
<main>
    <div class="gallery-content">
        <section class="gallery-header">
            <h1>Gallery</h1>
            <p class="description">
                Explore my projects, creative work, and achievements.
            </p>
        </section>

        <section class="filters">
            <div class="filter-buttons">
                {#each categories as category}
                    <button 
                        class="filter-btn"
                        class:active={selectedCategory === category}
                        onclick={() => selectedCategory = category}
                    >
                        {category}
                    </button>
                {/each}
            </div>
        </section>

        <section class="gallery-grid">
            {#each filteredItems as item (item.id)}
                <div class="gallery-item">
                    <div class="item-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div class="item-content">
                        <div class="item-category">{item.category}</div>
                        <h3 class="item-title">{item.title}</h3>
                        <p class="item-description">{item.description}</p>
                    </div>
                </div>
            {/each}
        </section>

        {#if filteredItems.length === 0}
            <div class="no-items">
                <p>No items found for the selected category.</p>
            </div>
        {/if}
    </div>
</main>

<style lang="scss">
    @use '$lib/theme/fonts.scss';
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/spacing.scss';

    :global(body, html) {
        margin: 0;
        padding: 0;
        background-color: var(--main-background);
        @extend %base-font;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 40px;
        width: 100%;
        min-height: calc(100vh - 4rem);

        @include screens.tablet {
            padding: 20px;
        }
    }

    .gallery-content {
        max-width: 1200px;
        width: 100%;
    }

    .gallery-header {
        text-align: center;
        margin-bottom: 3rem;

        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
            
            @include screens.mobile {
                font-size: 2rem;
            }
        }

        .description {
            font-size: 1.2rem;
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 0;
        }
    }

    .filters {
        margin-bottom: 3rem;

        .filter-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;

            .filter-btn {
                padding: 0.5rem 1.5rem;
                border: 1px solid var(--border-color);
                background-color: var(--card-background);
                color: var(--text-secondary);
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 0.9rem;

                &:hover {
                    background-color: var(--hover-background);
                    color: var(--text-primary);
                }

                &.active {
                    background-color: var(--accent-color);
                    color: white;
                    border-color: var(--accent-color);
                }
            }
        }
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;

        @include screens.mobile {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }

    .gallery-item {
        background-color: var(--card-background);
        border-radius: 12px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border: 1px solid var(--border-color);

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .item-image {
            width: 100%;
            height: 200px;
            overflow: hidden;
            background-color: var(--secondary-background);
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 96px;
                height: 96px;
                object-fit: cover;
                opacity: 0.7;
            }
        }

        .item-content {
            padding: 1.5rem;

            .item-category {
                font-size: 0.8rem;
                color: var(--accent-color);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 0.5rem;
                font-weight: 600;
            }

            .item-title {
                color: var(--text-primary);
                margin: 0 0 1rem 0;
                font-size: 1.3rem;
                font-weight: 600;
            }

            .item-description {
                color: var(--text-secondary);
                margin: 0;
                line-height: 1.5;
                font-size: 0.95rem;
            }
        }
    }

    .no-items {
        text-align: center;
        padding: 3rem;
        color: var(--text-secondary);
        
        p {
            margin: 0;
            font-size: 1.1rem;
        }
    }
</style>
