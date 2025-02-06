 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 <div className="formulario-post">
                        <h2>Nuevo Post</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Título
                            value={title}"
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Descripción"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={favorites}
                                    onChange={() => setFavorites(!favorites)}
                                />
                            </label>
                            <Uploader setUploadedUrl={setUploadedUrl} />

                            <button type="submit">Publicar</button>
                        </form>
                        <Logout />
                    </div>